import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card() {
    return (
        <section className="card">
            <img className="card-image" src={katie} alt="katie zaferes"/>
        <div className="card-rating">
            <img className="card-star" src={star} alt="star" />
            <p>5.0&nbsp;<span style={{opacity:"0.6"}}>(6)&nbsp;•USA</span> </p>
        </div>
        <div className="card-text">
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
        </section>
        
    )
}