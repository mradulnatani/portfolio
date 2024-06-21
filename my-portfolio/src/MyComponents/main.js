import React, { useState } from 'react';
import './main.css';

export default function Main() {
  const [field, setField] = useState(true);

  // Get the button element
  //const button = document.getElementById('autoClickButton');

  // Function to simulate a click
  //function autoClick() {
    //button.click();
  //}
  // Set a timeout to toggle the 'field' state every 2 seconds
  setTimeout(() => setField(!field), 2000);

  return (
    <div className='intro-content'>
      <br />
      <br />
      <pre>
        <p>Hello,</p>
        <p style={{backgroundColor:'yellow', color:'black'}}>I am Mradul Natani</p>
        {field ? <p>I am a web developer</p> : <p>also a d-app developer</p>}
      </pre>
      <button id='autoClickButton' style={{ visibility: 'hidden' }}>
        Click Me!
      </button>
    </div>
  );
}
