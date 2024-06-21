import React from 'react'
import './navbar.css'
import Social from './social'
export default function navbar() {
  return (
    <div>
      <ul className='socialmdi'>
      <li><Social/></li>
      </ul>
      <navbar className="navigation">
        <ul>
            <li>About</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </navbar>
    </div>
  )
}
