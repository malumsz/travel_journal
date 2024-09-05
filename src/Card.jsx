import React from "react"
import ReactDOM from "react-dom"

export default function Card(props) {
    return (
        <div>
            <div class="card-box">
                <img src= {props.imgUrl} class="img--cards"/>
                <div class="card-info">
                    <loc>
                        <img src="img\loc.svg" class="img--loc"/>
                        <span>{props.location.toUpperCase()}</span><a href={props.googleMapsUrl}>View on Google Maps</a>
                    </loc>     
                    <h1 class="info-title">{props.title}</h1>
                    <p class="date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}