import React, { useState } from 'react';
import './main.css';
import Myimage from './myimg-removebg-preview.png'

export default function Main() {
  const [field, setField] = useState(true);
  //const button = document.getElementById('autoClickButton');

  // Function to simulate a click
  //function autoClick() {
    //button.click();
  //}
  setTimeout(() => setField(!field), 1000);

  return (
    <div className='intro-content'>
      <br />
      <pre style={{display:'grid'}}>
        <h2 style={{fontSize:'100px'}}>Hello,<img src={Myimage} alt='myimage' style={{height:'200px',marginLeft:'50px'}}></img></h2>
        <h2 style={{backgroundColor:'yellow', color:'black',fontSize:'70px',marginRight:'500px'}}>I am Mradul Natani
        </h2>
        {field ? <h2 style={{color:'white',marginRight:'500px'}}>I am a full stack web developer</h2> : <h2 style={{color:'white',marginRight:'500px'}}>also a Decentralized-app developer</h2>}
      </pre>
      <button id='autoClickButton' style={{ visibility: 'hidden' }}>
        Click Me!
      </button>
    </div>
  );
}
