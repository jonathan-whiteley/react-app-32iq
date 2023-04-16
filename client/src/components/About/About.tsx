import React from "react";
import Alexa from './../../assets/img/Alexa.jpg';
import Connor from './../../assets/img/Connor.jpg';
import Jonathan from './../../assets/img/Jonathan.jpg';
import Max from './../../assets/img/Max.jpg';
import Footer from "../Footer/Footer";


function About() {
  let message = `32iQ is a computer-vision-powered diagnostic aid for panoramic x-ray images brought to you by a dedicated team of Berkeley data scientists.`;
  return (

    <section className="section-white">
        <div className="wrapper">
        <h1>this is the ABOUT page</h1>
        <h1>Project Motivation</h1>
        <h1>Our Team</h1>
        <h1>Acknowledgments</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="section-title">Our Team</h1>
                    <h4 className="section-subtitle">{message}</h4>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Alexa} className="team-img" alt="pic" />
                        <h3>Alexa Coughlin</h3>
                        <div className="team-info"><p>Product Manager</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Connor} className="team-img" alt="pic" />
                        <h3>Connor McCormick</h3>
                        <div className="team-info"><p>ML Engineer</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Jonathan} className="team-img" alt="pic" />
                        <h3>Jonathan Whiteley</h3>
                        <div className="team-info"><p>Data Scientist / Developer</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Max} className="team-img" alt="pic" />
                        <h3>Max Hoff</h3>
                        <div className="team-info"><p>BI / Data Engineer</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </section>
  
      
  )
}

export default About;