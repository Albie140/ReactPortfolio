import React from "react";
import Me from "../assets/me.jpeg";



function About() {
    return (
      <div>
        
          <h1>About Me</h1>
          <img src={Me} alt="Me!" className="img-fluid" height={400} width={400}/>
              <p>
              My name is Alberte, pronounced Albert, like Einstein. I graduated from college with a degree in Hospitality Management. I worked in the hospitality industry for over 10 years and decided it was time for a career change. I enjoy puzzles and challenges so I decided to work towards becoming a full stack web developer. Please check out my portfolio, where you can view some of the applications I have created. Feel free to reach out to me via the information found in the contact form.
              </p>
          
      </div>
    );
  }
  
  export default About;
  