import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card";
import data from "./data"

export default function App() {

    const experiences = data.map(item=>{
        return <Card
                    key = {item.id}
                    {...item}
                />

            /*
                   1st way:
                   img = {item.coverImg}
                    rating = {item.stats.rating}
                    reviewCount = {item.stats.reviewCount}
                    country = {item.location}
                    title = {item.title}
                    price = {item.price}
                    openSpots={item.openSpots}

                    2nd way: (Access using props.item)
                    item = {item}

                    3rd way: Using Spread syntax
                    {...item}
                    */
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