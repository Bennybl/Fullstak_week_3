import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Left from './components/Left';

const posts = [
  {title: "Blog post #1", data: "My first blog post is all about my blog post and how to write a new post in my blog, you can find it here"},
  {title: "Blog post #2", data: "My second blog post is all about my blog post"},
  {title: "Blog post #3", data: "My third blog post is all about my blog post"}
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Main posts={posts}/>
      <Left/>
    </div>
  );
}

export default App;
