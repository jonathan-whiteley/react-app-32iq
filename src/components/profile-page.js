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
           
          <div class="col-sm-6 col-md-3">

                <div class="team-item">
                
                    <img src={Alexa} class="team-img" alt="pic" />                   
                    <h3>ALEXA COUGHLIN</h3>            
                    <div class="team-info"><p>Product Manager</p></div>
                    <div class="bio"><p>Alexa brings a background in Human-Computer interaction design and data analytics experience to the team. She currently works as a Business Analyst at SpaceX and spends her free time hiking and surfing.</p></div>
               
              </div>
          </div> 
            
          <div class="col-sm-6 col-md-3">

                <div class="team-item">
                
                    <img src={Connor} class="team-img" alt="pic" />
                   
                    <h3>CONNOR McCORMICK</h3>
                    
                    <div class="team-info"><p>ML Engineer</p></div>

                    <div class="bio"><p>Connor is a Data Scientist at Predibase where he is excited to be working on an end to end declarative machine learning platform poised to revolutionize the way machine learning is done throughout the industry.</p></div>
                    
                </div>

          </div> 
          <div class="col-sm-6 col-md-3">

                <div class="team-item">
                
                    <img src={Jonathan} class="team-img" alt="pic" />
                   
                    <h3>JOHNATHAN WHITELEY</h3>
                    
                    <div class="team-info"><p>Data Scientist/Project Manager</p></div>

                    <div class="bio"><p>Jonathan is a Sr Solutions Engineer at ThoughtSpot, where he works to bring AI-powered Search + Analytics to enterprise data. Outside of the (virtual) office, he enjoys skiing, sport-climbing, and cooking.</p></div>
                    
                </div>

          </div>
          <div class="col-sm-6 col-md-3">

                <div class="team-item">
                
                    <img src={Max} class="team-img" alt="pic" />
                   
                    <h3>MAX HOFF</h3>
                    
                    <div class="team-info"><p>BI/Data Engineer</p></div>

                    <div class="bio"><p>Max is a Business Intelligence Associate at Citadel Securities who is passionate about Information Systems and their ability to make the world more fair and efficient through the lens of data analytics.</p></div>
                    
                </div>

          </div> 
      
      </div> 
  
  </div> 

  </section>
  )
}

export default About;