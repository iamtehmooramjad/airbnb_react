import React from "react";

export default function Card(props){
    return(
        <div className="card">
            {props.openSpots ===0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`/assets/images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="/assets/images/star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}