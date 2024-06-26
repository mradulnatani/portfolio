import './App.css';
import {Route,MemoryRouter, Routes} from 'react-router-dom'
import Navbar from './MyComponents/navbar';
import Main from './MyComponents/main';
import Picture from './MyComponents/picture';
import About from './MyComponents/About';
import Projects from './MyComponents/projects';
import Contact from './MyComponents/contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MemoryRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='./MyComponents/About' element={<About/>}/>
        <Route path='./MyComponents/projects' element={<Projects/>}/>
        <Route path='./MyComponents/Contact' element={<Contact/>}/>
        <Route path='/*' element={<h1>404 Page not found</h1>}/>
      </Routes>
      </MemoryRouter>
      <Picture/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <hr style={{marginLeft:'50px', marginRight:'50px'}}/>
      <About/>
    </div>
  );
}

export default App;
