from flask import Flask, request, abort, make_response
from flask_cors import CORS, cross_origin
import mysql.connector as mysql
import json
import uuid
import bcrypt
from datetime import datetime


app = Flask(__name__)
cors = CORS(app)

db = mysql.connect(
    host = "localhost",
    port= 3306,
    user = "root",
    passwd = "123456",
    database = "mydb"
)

@app.post('/post/')
def create_post():
    data = request.get_json()
    query = "insert into posts (title, body) values (%s, %s)"
    values = (data['title'], data['body'])
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    pass

@app.get('/posts/')
def get_posts():
    query = "select * from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    header = ['id' ,'title', 'data','userId', 'created_at']
    data = []
    for r in records: 
        data.append(dict(zip(header, r)))
    for post in data:
         post["created_at"] = str(post["created_at"])
    return json.dumps(data)

@app.post('/login')
# @cross_origin()
def login():
    data = request.get_json()
    print(data)
    query = 'select userId, password, username from mydb.users where username =' + '\''+ data['username'] + '\''
    values = data['username']
    cursor = db.cursor()
    cursor.execute(query)
    record = cursor.fetchone()
    cursor.close()

    if not record:
        abort(401)
    
    user_id = record[0]
    hashed_pwd = record[1]
    hashed_pwd = hashed_pwd.encode('utf-8')
    if bcrypt.hashpw(data['password'].encode('utf-8'), hashed_pwd) != hashed_pwd:
        abort(401) 

    query = "insert into sessions (userId, sessionDate) values (%s, %s)"
    session_date = datetime.now()
    values = (record[0], session_date)
    cursor = db.cursor()
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    resp = make_response()
    return resp

@app.post('/logout')
def logout():
    session_id = request.cookies.get("session_id")
    if (type(session_id) != type('')):
        abort(500)
    query = "delete from sessions where id = %s"
    values = (session_id,)
    cursor = db.cursor()
    try:
        cursor.execute(query, values)
        record = cursor.fetchone()
        db.commit()
        cursor.close()
        return {'message': 'deleted session'}
    except Exception as e:
        abort(500)

@app.post('/register')
def handleRegister():
    try:
        username = request.json['username']
        password = request.json['password']
        password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        query = 'insert into users (username, password) values (%s, %s)'

        cursor = db.cursor()
        cursor.execute(query, tuple([username, password]))
        res = cursor.fetchall()
        db.commit()
        return json.dumps({'status': 200})

    except mysql.errors.IntegrityError:
        abort(409, "Incorrect input key was given") #wrong input status
    except KeyError:
        abort(422) #duplicate key status
    except Exception as e:
        print(e)
        abort(500)
    finally:
        cursor.close()


if __name__ == "__main__":
	app.run()