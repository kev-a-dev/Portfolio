import React from 'react'
import './Technology.css';
import { techList } from '../Data';

export default function Technology() {
  return (
    <section id="technology">
        <div className="container">
          
          <h1 className="title">
            My <span>Technology Stack</span>
          </h1>
          
          <div className="tech-list-container">
            {
            techList.map((tech, index) => (
                <div className="tech-wrapper"  key={index}>
                  <img src={tech.img} alt="" />
                  <h3 className='tech-name'>{tech.name}</h3>
                </div>
            ))
            }
          </div>

        </div>
      </section>
  )
}
