import './App.css';
import Contact from './pages/Contact'
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NewPost from './pages/NewPost';
import Layout from './components/Layout'
 


function App() {
  return (
    <>
      <div className="App">
        <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index path="/home" element={<Home/>}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add' element={<NewPost/>}/>
              </Route>
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
