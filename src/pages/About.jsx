import React from 'react';
import PageHeader from "../components/HomePageHeader.js";
import Footer from "../components/Footer.js";

import Alexa from '../assets/img/Alexa.jpg';
import Connor from '../assets/img/Connor.jpg';
import Jonathan from '../assets/img/Jonathan.jpg';
import Max from '../assets/img/Max.jpg';


// function Home() {
//     return (
//         <h1>this is the homepage</h1>
//     );
// }

// export default Home;

// function Result() {
//   return (
      
//       <h1>this is the result page</h1>
//   );
// }

// export default Result;

export default function AboutPage() {
  React.useEffect(() => {
    document.body.classList.toggle("about-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("about-page");
    };
  }, []);
  return (
      <>
        {/* <IndexNavbar /> */}
        
        <div className="wrapper">
        <h1>this is the ABOUT page</h1>
        <h1>Project Motivation</h1>
        <h1>Our Team</h1>
        <h1>Acknowledgments</h1>

  <div class="container">

      <div class="row">
     
                  <div class="col-md-12 text-center">

                        <h1 class="section-title">Our Team</h1>

                        <h4 class="section-subtitle">
                        32iQ is a computer-vision-powered diagnostic aid for panoramic x-ray images brought 
                        to you by a dedicated team of Berkeley data scientists. 
                        <br/> (MIDS Program - Class of '23)
                        </h4>
                        
                  </div> 
           
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Alexa} class="team-img" alt="pic" />                   
                    <h3>Alexa Coughlin</h3>            
                    <div class="team-info"><p>Product Manager</p></div>
                    <div class="bio"><p>Short bio.</p></div>
               
              </div>
          </div> 
            
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Connor} class="team-img" alt="pic" />
                   
                    <h3>Connor McCormick</h3>
                    
                    <div class="team-info"><p>ML Engineer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div> 
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Jonathan} class="team-img" alt="pic" />
                   
                    <h3>Jonathan Whiteley</h3>
                    
                    <div class="team-info"><p>Data Scientist / Developer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div>
          <div class="col-sm-6 col-md-4">

                <div class="team-item">
                
                    <img src={Max} class="team-img" alt="pic" />
                   
                    <h3>Max Hoff</h3>
                    
                    <div class="team-info"><p>BI / Data Engineer</p></div>

                    <div class="bio"><p>Short bio.</p></div>
                    
                </div>

          </div> 
      
      </div> 
  
  </div> 


          <div className="main">
          </div>
      </div>
      <Footer />

    </>
  );
}