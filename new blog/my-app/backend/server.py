from flask import Flask, request
from flask_cors import CORS, cross_origin
import mysql.connector as mysql
import json


app = Flask(__name__)
cors = CORS(app)


db = mysql.connect(
	host = "localhost",
	user = "root",
    port= 3306,
	passwd = "123456",
	database = "mydb")

@app.post('/post/')
@cross_origin()
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
@cross_origin()
def get_posts():
    query = "select * from posts"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    cursor.close()
    header = ['postId' ,'title', 'body','userId', 'status', 'creationDate']
    data = []
    for r in records: 
        data.append(dict(zip(header, r)))
    for post in data:
         post["creationDate"] = str(post["creationDate"])
    return json.dumps(data)


if __name__ == "__main__":
	app.run()