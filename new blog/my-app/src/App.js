import './App.css';
import Contact from './pages/Contact'
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route, useParams } from 'react-router-dom';
import NewPost from './pages/NewPost';
import Layout from './components/Layout'
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme( {loginPage:{
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    marginBottom: '1rem',
  },
  input: {
    margin: '0.5rem 0',
    width: '100%',
  },
  button: {
    margin: '1rem 0 0 0',
    width: '100%',
  },
}

})

const posts = [
  {id: 1, title: "Blog post #1", data: "My first blog post is all about my blog post and how to write a new post in my blog, you can find it here"},
  {id: 2, title: "Blog post #2", data: "My second blog post is all about my blog post"},
  {id: 3, title: "Blog post #3", data: "My third blog post is all about my blog post"}
]


function App() {
  return (
    <>
      <div className="App">
      <ThemeProvider theme={theme}>x
        <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index  element={<Home posts={posts}/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add' element={<NewPost/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/post/:id' element={<SinglePost id={useParams().id} posts={posts}/>}/>
              </Route>
            </Routes>
        </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
