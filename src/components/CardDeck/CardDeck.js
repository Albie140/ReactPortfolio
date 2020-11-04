import React from "react";
import "./CardDeck.css";


function CardDeck() {
    return (

        <div className="card-deck">
            <div className="card">
                <img src="..." className="card-img-top" alt="Book Chat Application" />
                <div className="card-body">
                    <h5 className="card-title">Book Chat</h5>
                    <p className="card-text"> </p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Burger App</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
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
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Recipe Roulette</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Workday Scheduler</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
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