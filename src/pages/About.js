import React from "react";
import Me from "../assets/me.jpeg"


function About() {
    return (
      <div>
        
          <h1>About Me</h1>
          <img src={Me} alt="Me!" className="img-fluid" height={300} width={200}/>
              <p>
              My name is Alberte, pronounced Albert, like Einstein. I graduated from college with a degree in Hospitality Management. I worked in the hospitality industry for over 10 years and decided it was time for a career change. I am now working towards becoming a full stack web developer. Please check out my portfolio, where you can view some of the applications I have created. Feel free to reach out to me via the information found in the contact form.
              </p>
          
      </div>
    );
  }
  
  export default About;
  