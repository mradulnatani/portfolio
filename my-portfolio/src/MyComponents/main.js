import React, { useState, useEffect } from 'react';
import './main.css';
import Myimage from './myimg-removebg-preview.png';

export default function Main() {
  const [field, setField] = useState(true);

  setTimeout(() => setField(!field), 1000);

  useEffect(() => {
    const handleResize = () => {
      setField(window.innerWidth < 620);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='intro-content'>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h1 className='intro'style={{color:'black',backgroundColor:'yellow',fontSize:'27px'}}>Hello, I am Mradul Natani</h1>
        <img src={Myimage} alt='myimage' style={{ height: '200px', marginLeft: '0px' }} />
        {field ? (
          <p  className='field'style={{fontSize:'20px',color:'black',backgroundColor:'white'}}>I am a full stack web developer</p>
        ) : (
          <p  className='field'style={{fontSize:'20px',color:'black',backgroundColor:'white'}}>also a Decentralized-app developer</p>
        )}
        <br/>
      <button id='autoClickButton' style={{ visibility: 'hidden' }}>
        Click Me!
      </button>
    </div>
  );
}
