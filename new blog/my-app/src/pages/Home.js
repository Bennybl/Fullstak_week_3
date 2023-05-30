import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import Main from '../components/Main';
import Left from '../components/Left';



function Home(props) {
  //const posts = props.posts
  const [posts, setPosts] = useState(false)
  const get_posts = async () => {
    if(posts) return
    const result = (await axios.get("http://localhost:5000/posts")).data
    setPosts(result)
  }
  get_posts()
  return (
    <div className="Home">
      {posts ? <Main posts={posts}></Main> : <p>Loading...</p> }

      <Left/>
    </div>
  );
}


export default Home;