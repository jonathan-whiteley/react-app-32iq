import React from "react";
import Alexa from './../../assets/img/Alexa.jpg';
import Connor from './../../assets/img/Connor.jpg';
import Jonathan from './../../assets/img/Jonathan.jpg';
import Max from './../../assets/img/Max.jpg';

function About() {
  let message = `32iQ is a computer-vision-powered diagnostic aid for panoramic x-ray images brought to you by a dedicated team of Berkeley data scientists.`;
  return (
    <section className="section-white">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title">About Us</h2>
                    <p className="section-subtitle">{message}</p>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Alexa} className="team-img" alt="pic" />
                        <h3>ALEXA COUGHLIN</h3>
                        <div className="team-info"><p>Product Manager</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Connor} className="team-img" alt="pic" />
                        <h3>CONNOR McCORMICK</h3>
                        <div className="team-info"><p>ML Engineer</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Jonathan} className="team-img" alt="pic" />
                        <h3>JOHNATHAN WHITELEY</h3>
                        <div className="team-info"><p>Data Scientist/Project Manager</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img src={Max} className="team-img" alt="pic" />
                        <h3>MAX HOFF</h3>
                        <div className="team-info"><p>BI/Data Engineer</p></div>
                        <div className="bio"><p>Short bio.</p></div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default About;