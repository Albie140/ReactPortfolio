import React from "react";
import "./Footer.css";
import Resume from "../../assets/Resume.pdf";

function Footer() {
    return(
<>
<footer className="navbar navbar-dark bg-dark fixed-bottom">
<a href={Resume} target="_blank">Click here to view my Resume</a>
        <span className="navbar-brand mb-0 h1"> Copyright &copy; 2020 </span>
      </footer>
      
</>
    );
}
export default Footer;