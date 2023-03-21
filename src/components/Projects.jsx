import React from 'react'
import './Projects.css';

import { projectList } from '../Data';

export default function Projects() {
  

  return (
    <section id="projects">
        <div className="container">

            <h1 className='title'>Some of my <span>Projects</span></h1>

            <div className="projects-container">

              {
                projectList.map((project, index) => (
                  <div className="project" key={index}>

                  <div className="img-wrapper">
                    <div id={`carouselExampleIndicators${index}`} class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>

                      <div class="carousel-inner">
                      {
                        project.img.map((img, idx) => (
                          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                            <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
                          </div>
                        )) 
                      }
                      </div>

                      <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
  
                  <div className="info-wrapper">
                    <div className="title-info-wrapper">
                      <h4 className="project-title">{project.title}</h4>
                      <h4 className="project-info">{project.info}</h4>
                    </div>
                    
                    <div className="tool-link-container">
                      <h4 className="project-tools">{project.tools}</h4>
                      
                      <div className="link-container">
                        <a href={project.link} target="_blank" rel="noreferrer" title='Live Link' className='project-link'><h4>Try it!</h4></a>
                        <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Code" className='project-github'><i class="fa-brands fa-github"></i></a>
                      </div>
                    </div>

                  </div>
  
                </div>
                ))
              }



            </div>

        </div>
    </section>
  )
}
