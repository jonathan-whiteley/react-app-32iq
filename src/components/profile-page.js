import React from "react";
import Alexa from './images/Alexa.jpg';
import Connor from './images/Connor.jpg';
import Jonathan from './images/Jonathan.jpg';
import Max from './images/Max.jpg';

function About() {
  let message = `32iQ is a computer-vision-powered diagnostic aid for panoramic x-ray images brought to you by a dedicated team of Berkeley data scientists.`;
  return (
    <section class="section-white">

  <div class="container">

      <div class="row">
     
                  <div class="col-md-12 text-center">

                        <h2 class="section-title">About Us</h2>

                        <p class="section-subtitle">{message}</p>
                        
                  </div> 
           
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Alexa} class="team-img" alt="pic" />                   
                    <h3>ALEXA COUGHLIN</h3>            
                    <div class="team-info"><p>Product Manager</p></div>
                    <div class="bio"><p>Short bio.</p></div>
               
              </div>
          </div> 
            
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Connor} class="team-img" alt="pic" />
                   
                    <h3>CONNOR McCORMICK</h3>
                    
                    <div class="team-info"><p>ML Engineer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div> 
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Jonathan} class="team-img" alt="pic" />
                   
                    <h3>JOHNATHAN WHITELEY</h3>
                    
                    <div class="team-info"><p>Data Scientist/Project Manager</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div>
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Max} class="team-img" alt="pic" />
                   
                    <h3>MAX HOFF</h3>
                    
                    <div class="team-info"><p>BI/Data Engineer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div> 
      
      </div> 
  
  </div> 

  </section>
  )
}

export default About;