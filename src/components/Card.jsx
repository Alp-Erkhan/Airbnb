import React from "react"
import Person_1 from "../images/person_1.png"
import Star from "../images/star.svg"

export default function Card(props) {
    return (
        <div className="card wrapper">
            <img src={Person_1} className="card-image" />
            <div className="card-desc">
                <div className="card-desc__star">
                    <img src={Star} />  
                    <span>{props.rating}</span>
                    <span>{props.reviewCount} •</span> 
                    <span>{props.country}</span>
                </div>
                <p className="card-desc__title">
                    {props.title}
                </p>
                <p className="card-desc__cost">
                    <b>From ${props.price}</b> / person
                </p>
            </div>
        </div>
    );
}
  