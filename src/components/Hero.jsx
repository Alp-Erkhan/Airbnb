import React from "react"
import Logo from "../images/photo-grid.svg"

export default function Hero() {
    return (
        <section className="hero wrapper">
            <img src={Logo} className="hero-image" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-description">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}
  