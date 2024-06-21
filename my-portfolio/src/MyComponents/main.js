import React, { useState } from 'react';
import './main.css';

export default function Main() {
  const [field, setField] = useState(true);
  //const button = document.getElementById('autoClickButton');

  // Function to simulate a click
  //function autoClick() {
    //button.click();
  //}
  setTimeout(() => setField(!field), 2000);

  return (
    <div className='intro-content'>
      <br />
      <br />
      <pre>
        <h2>Hello,</h2>
        <h2 style={{backgroundColor:'yellow', color:'black'}}>I am Mradul Natani</h2>
        {field ? <h2>I am a full stack web developer</h2> : <h2>also a d-app developer</h2>}
      </pre>
      <button id='autoClickButton' style={{ visibility: 'hidden' }}>
        Click Me!
      </button>
    </div>
  );
}
