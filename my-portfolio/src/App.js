import './App.css';
import {Route,MemoryRouter, Routes} from 'react-router-dom'
import Navbar from './MyComponents/navbar';
import Main from './MyComponents/main';
import Picture from './MyComponents/picture';
import About from './MyComponents/About';
import Projects from './MyComponents/projects';
import Contact from './MyComponents/contact';
import Technology from './MyComponents/technology'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MemoryRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='./About' element={<About/>}/>
        <Route path='./projects' element={<Projects/>}/>
        <Route path='./contact' element={<Contact/>}/>
        <Route path='/*' element={<h1>404 Page not found</h1>}/>
      </Routes>
      </MemoryRouter>
      <Picture/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <hr style={{marginLeft:'200px', marginRight:'200px'}}/>
      <About/>
      <hr style={{marginLeft:'200px', marginRight:'200px'}}/>
      <Technology/>
      <hr style={{marginLeft:'200px', marginRight:'200px'}}/>
      <Projects/>
      <hr style={{marginLeft:'200px', marginRight:'200px'}}/>
      <Contact/>
    </div>
  );
}

export default App;
