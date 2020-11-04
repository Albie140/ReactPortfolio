import React from "react";
import "./CardDeck.css";
import Pwg1 from "../../assets/pwg1.png";
import BookchatSignIn from "../../assets/bookchatSignIn.png";
import BurgerApp from "../../assets/burgerApp.png";
import RecipeRoulette from "../../assets/RecipeRoulette.png";
import NoteTakerApp from "../../assets/noteTakerApp.png";
import workdayScheduler from "../../assets/workdayScheduler.jpeg";


function CardDeck() {
    return (

        <div className="card-deck">
            <div className="card">
                <img src={BookchatSignIn} className="card-img-top" alt="Book Chat Application" />
                <div className="card-body">
                    <h5 className="card-title">Book Chat</h5>
                    <p className="card-text"> </p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
            <div className="card">
                <img src={BurgerApp} className="card-img-top" alt="Burger App" />
                <div className="card-body">
                    <h5 className="card-title">Burger App</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
            <div className="card">
                <img src={NoteTakerApp} className="card-img-top" alt="Note Taker App" />
                <div className="card-body">
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="card-deck">
                <div className="card">
                    <img src={RecipeRoulette} className="card-img-top" alt="Recipe Roulette" />
                    <div className="card-body">
                        <h5 className="card-title">Recipe Roulette</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={workdayScheduler} className="card-img-top" alt="Workday Scheduler" />
                    <div className="card-body">
                        <h5 className="card-title">Workday Scheduler</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src={Pwg1} className="card-img-top" alt="Password Generator" />
                    <div className="card-body">
                        <h5 className="card-title">Password Generator</h5>
                        <p className="card-text"> </p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CardDeck;