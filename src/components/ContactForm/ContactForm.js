import React from "react";
import "./ContactForm.css";



function ContactForm() {
    return (
        <>
        <form className="container-fliud">
            <h1> Contact Me </h1>
            <div class="form-group">

                <label for="exampleFormControlInput1">Name: </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />

            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-dark">Submit</button>
        </form>
</>
    );
}

export default ContactForm;