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
            <br></br>
                <br/> <br/> 
            <h1 className="profile-title text-left">Project Motivation</h1>
                {/* <h5 className="text-on-back">01</h5> */}
                <h3 className="profile-title text-left">
                In the field of dentistry, radiological errors frequently contribute to delayed or misdiagnoses for patients, with perceptual errors accounting for nearly 70% of misdiagnoses.
                <br></br>
                <br></br> Additionally about 40% of low-income or uninsured adults have untreated cavities, as well as being 3 times as likely to have four or more untreated cavities as adults with higher incomes or private insurance.
                </h3>
                <br/> <br/> 
                <h1 className="profile-title text-left">Our Mission</h1>
                <h2><ol className="profile-title text-left">1. Enable healthcare professionals to efficiently triage serious dental issues sooner
                </ol></h2>
                <h2><ol className="profile-title text-left">2. Improve outcomes for patients with limited or delayed access to dental care expertise
                </ol></h2>    
                <br></br>
                <br/> <br/> 
                
                </div>
            <div className="col-md-12 text-center">
            <h1 className="profile-title text-left">Acknowledgements</h1>
            <h3 className="profile-title text-left">
                A big thank you to all our subject matter experts in the field of dentistry that made this project possible especially faculty at the University of Colorado School of Dental Medicine & the Tufts University School of Dental Medicine. 
                </h3>
                <br/> <br/> 
            </div>
            <div className="col-md-12 text-center">
            <h1 className="profile-title text-left">Our Team</h1>
                {/* <h5 className="text-on-back">01</h5> */}
                <br/> <br/> 
                </div>
                <div className="col-md-12 text-center">
                        <h3 className="section-subtitle">UC Berkeley MIDS Program - Class of '23</h3>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="team-item">
                        <img src={Alexa} className="team-img" alt="pic" />
                        <h3>Alexa Coughlin</h3>
                        <div className="team-info"><p>Product Manager</p></div>
                        <div className="bio"><p>Alexa brings a background in Human-Computer interaction design and data analytics experience to the team. She currently works as a Business Analyst at SpaceX and spends her free time hiking and surfing.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="team-item">
                        <img src={Connor} className="team-img" alt="pic" />
                        <h3>Connor McCormick</h3>
                        <div className="team-info"><p>ML Engineer</p></div>
                        <div className="bio"><p>Connor is a Data Scientist at Predibase where he is excited to be working on an end to end declarative machine learning platform poised to revolutionize the way machine learning is done in the industry.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="team-item">
                        <img src={Jonathan} className="team-img" alt="pic" />
                        <h3>Jonathan Whiteley</h3>
                        <div className="team-info"><p>Data Scientist / Developer</p></div>
                        <div className="bio"><p>Jonathan is a Sr Solutions Engineer at ThoughtSpot, where he works to bring AI-powered Search + Analytics to enterprise data. Outside of the (virtual) office, he enjoys skiing, sport-climbing, and cooking.</p></div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="team-item">
                        <img src={Max} className="team-img" alt="pic" />
                        <h3>Max Hoff</h3>
                        <div className="team-info"><p>BI / Data Engineer</p></div>
                        <div className="bio"><p>Max is a Business Intelligence Associate at Citadel Securities who is passionate about Information Systems and their ability to make the world more fair and efficient through the lens of data analytics.</p></div>
                    </div>
                    <br/> <br/> 
                </div>
            </div>
        </div>
    <Footer/>
  </section>
  
      
  )
}

export default About;