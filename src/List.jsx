import React from "react"
import ReactDOM from "react-dom"
import data from "./data"
import App from "./App"
import Card from "./Card"

export default function List() {
    const card = data.map(item => {
        return (
            <Card
                imgUrl = {item.imageUrl} 
                title = {item.title} 
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description} 
            />
        )
    })
    return (
        <div>
            {card}
        </div>
    )
}