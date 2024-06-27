import React from 'react'
import './navbar.css'
import { Link,BrowserRouter } from 'react-router-dom'
import Gitlogo from './githublogo.png'
import Linkedinlogo from './linkedinlogo.png'
import Instalogo from './instalogo.webp'
export default function navbar() {
  return (
    <div>
      <navbar className="navigation">
        <ul style={{display:'flex'}}>
     <BrowserRouter>
            <li style={{color:'yellow'}}><Link to={'About'}>About</Link></li>
            <li><Link to={'technologies'}>Technologies</Link></li>
            <li><Link to={'projects'}>Projects</Link></li>
            <li><Link to={'contacts'}>Contact</Link></li>
            <li><a href='https://github.com/mradulnatani'><img src={Gitlogo} alt='github' style={{height:'35px',marginLeft:'750px'}}></img></a></li>
            <li><a href='https://www.linkedin.com/in/mradul-natani-882194248/'><img src={Linkedinlogo} alt='linkedin' style={{height:'35px',border:'1px',borderRadius:'19px',marginLeft:'750px'}}></img></a></li>
            <li><a href='https://www.instagram.com/_mradull.?igsh=eHZmd3lxaDB6bzJ4'><img src={Instalogo} alt='instagram' style={{height:'35px',marginLeft:'750px'}}></img></a></li>
            </BrowserRouter>
        </ul>
      </navbar>
    </div>
  )
}
