import React from 'react'
import './navbar.css'
import { Link,BrowserRouter } from 'react-router-dom'
export default function navbar() {
  return (
    <div style={{border:'1px solid yellow'}}>
      
      <navbar className="navigation">
        <ul style={{display:'flex'}}>
     <BrowserRouter>
            <li style={{color:'yellow'}}><Link to={'About'}>About</Link></li>
            <li><Link to={'technologies'}>Technologies</Link></li>
            <li><Link to={'projects'}>Projects</Link></li>
            <li><Link to={'contacts'}>Contact</Link></li>
            </BrowserRouter>
        </ul>
      </navbar>
    </div>
  )
}
