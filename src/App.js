import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card";
import data from "./data"

export default function App() {

    const experiences = data.map(e=>{
        return <Card
                    key = {e.id}
                    img = {e.coverImg}
                    rating = {e.stats.rating}
                    reviewCount = {e.stats.reviewCount}
                    country = {e.location}
                    title = {e.title}
                    price = {e.price}
                    openSpots={e.openSpots}
               />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {experiences}
            </section>
        </div>
    )
}