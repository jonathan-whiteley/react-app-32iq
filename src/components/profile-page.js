import React from "react";

function About() {
  let message = `32iQ, a computer-vision-powered diagnostic aid for panoramic x-ray images,
  is brought to you by a dedicated team of Berkeley data scientists.`;
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
                
                    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                    <h3>ALEXA COUGHLIN</h3>            
                    <div class="team-info"><p>Product Manager</p></div>
                    <div class="bio"><p>Short bio.</p></div>
               
              </div>
          </div> 
            
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
                   
                    <h3>CONNOR McCORMICK</h3>
                    
                    <div class="team-info"><p>ML Engineer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div> 
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="/images/Jonathan.jpg" class="team-img" alt="pic" />
                   
                    <h3>JOHNATHAN WHITELEY</h3>
                    
                    <div class="team-info"><p>Data Scientist/Project Manager</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div>
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
                   
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