import React from "react";
import './FlagCard.css';


export default function FlagCard({name, flagImg, alt}) {
    return(
        <div className="card">
            <img className="image" src={flagImg} alt={alt} />
            <p>{name}</p>
        </div>
    );
}