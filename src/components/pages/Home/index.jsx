import React from "react"

import Showcase from "../../Showcase"
import Brands from "../../Brands"
import Products from "../../Products"
import InfoCards from "../../InfoCards"
import Example from "../../Example"
import Footer from "../../Footer"
import Comment from "../../Comments"
import HeroSection from "../../Hero"

const Home = () => {
    return (
        <div>
            <Showcase />
            <Brands />
            <Products />
            <InfoCards />
            <Example />
            <Comment />
            <HeroSection />
            <Footer />
        </div>
    )
}

export default Home
