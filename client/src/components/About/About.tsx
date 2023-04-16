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

        

        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
            <h1 className="profile-title text-left">Project Motivation</h1>
                {/* <h5 className="text-on-back">01</h5> */}
                <h4 className="profile-title text-left">
                In the field of dentistry, radiological errors frequently contribute to delayed or misdiagnoses for patients, with perceptual errors accounting for nearly 70% of misdiagnoses. Additionally about 40% of low-income or uninsured adults have untreated cavities, as well as being 3 times as likely to have four or more untreated cavities as adults with higher incomes or private insurance.
                </h4>
                <br></br>
                <br/> <br/> 
                <h1 className="profile-title text-left">Our Mission</h1>
                <ol className="profile-title text-left">1. Enable healthcare professionals to efficiently triage serious dental issues sooner
                </ol>
                <ol className="profile-title text-left">2. Improve outcomes for patients with limited or delayed access to dental care expertise
                </ol>    
                <br></br>
                <br/> <br/> 
                
                </div>
            <div className="col-md-12 text-center">
            <h1 className="profile-title text-left">Our Team</h1>
                {/* <h5 className="text-on-back">01</h5> */}
                <br/> <br/> 
                </div>
                <div className="col-md-12 text-center">
                        <h4 className="section-subtitle">UC Berkeley MIDS Program - Class of '23</h4>
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
                    <br/> <br/> 
                </div>
            </div>
            <div className="col-md-12 text-center">
            <h1 className="profile-title text-left">Acknowledgements</h1>
            <h4 className="profile-title text-left">
                A big thank you to all our subject matter experts in the field of dentistry that made this project possible especially faculty at the University of Colorado School of Dental Medicine & the Tufts University School of Dental Medicine. 
                </h4>
                <br/> <br/> 
            </div>
        </div>
    <Footer/>
  </section>
  
      
  )
}

export default About;