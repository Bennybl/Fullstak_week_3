import './App.css';
import Contact from './pages/Contact'
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route, useParams } from 'react-router-dom';
import NewPost from './pages/NewPost';
import Layout from './components/Layout'
import SinglePost from './pages/SinglePost';

const posts = [
  {id: 1, title: "Blog post #1", data: "My first blog post is all about my blog post and how to write a new post in my blog, you can find it here"},
  {id: 2, title: "Blog post #2", data: "My second blog post is all about my blog post"},
  {id: 3, title: "Blog post #3", data: "My third blog post is all about my blog post"}
]


function App() {
  return (
    <>
      <div className="App">
        <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index  element={<Home posts={posts}/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add' element={<NewPost/>}/>
                <Route path='/post/:id' element={<SinglePost id={useParams().id} posts={posts}/>}/>
              </Route>
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
