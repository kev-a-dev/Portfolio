import React from 'react'
import './Nav.css';

export default function Nav() {
  return (
    <section id="nav">
        <div className="underlay"></div>

        <div className="container">
          

          <div className="logo-wrapper">
            <h1 className='logo'>KL</h1>
          </div>
          
          <div className="link-container">
            <a href="#about" className='link'>About</a>
            <a href="#projects" className='link'>Projects</a>
            <a href="#contact" className='link'>Contact</a>
          </div>
        
        </div>
    </section>
  )
}
