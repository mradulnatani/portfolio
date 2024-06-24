import React from 'react'
import './navbar.css'
export default function navbar() {
  return (
    <div>
      
      <navbar className="navigation">
        <ul style={{display:'flex'}}>
          <li><b style={{border:'1px solid white',borderBlockEndWidth:'5px', borderRadius:'20px', wordSpacing:'3px'
          }}>Mradul Natani</b></li>
            <li>About</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </navbar>
    </div>
  )
}
