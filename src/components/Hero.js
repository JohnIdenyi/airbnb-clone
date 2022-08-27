import React from "react";

function Hero() {
    return (
        <section>
            <div className="hero-image-container">
                <img src="./images/photo-grid.png" className="hero-photo" alt="Airbnb hero" />
            </div>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;