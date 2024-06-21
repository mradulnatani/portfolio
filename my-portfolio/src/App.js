import './App.css';
import Navbar from './MyComponents/navbar';
import Main from './MyComponents/main';
import Picture from './MyComponents/picture';
import About from './MyComponents/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Picture/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <hr style={{marginLeft:'50px', marginRight:'50px'}}/>
      <About/>
    </div>
  );
}

export default App;
