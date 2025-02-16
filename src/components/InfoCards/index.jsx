import React from "react"
import {FaPalette, FaTools, FaBook, FaUniversalAccess} from "react-icons/fa"

// img
import card1 from "../../assets/images/benefit/1.png"
import card2 from "../../assets/images/benefit/2.png"
import card3 from "../../assets/images/benefit/3.png"
import card4 from "../../assets/images/benefit/4.png"

const benefits = [
    {
        icon: <img src={card1} alt="card1" />,
        title: "Timeless aesthetics",
        description:
            "Build beautiful UIs with ease. Start with Google’s Material Design, or create your own sophisticated theme.",
    },
    {
        icon: <img src={card2} alt="card2" />,
        title: "Intuitive customization",
        description:
            "Our components are as flexible as they are powerful. You always have full control over how they look and behave.",
    },
    {
        icon: <img src={card3} alt="card3" />,
        title: "Unrivaled documentation",
        description:
            "The answer to your problem can be found in our docs. How can we be so sure? Because our docs boast over 2,000 contributors.",
    },
    {
        icon: <img src={card4} alt="card4" />,
        title: "Dedicated to accessibility",
        description:
            "We believe in building for everyone. That’s why accessibility is a high priority with every new feature we ship.",
    },
]

const InfoCards = () => {
    return (
        <div className="container1 py-12">
            <h3 className="text-blue-500 font-semibold">Why build with MUI?</h3>
            <h2 className="text-3xl font-bold mt-2">
                A <span className="text-blue-500">delightful experience</span>{" "}
                <br />
                for you and your users
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition flex flex-col gap-[8px]">
                        <div className="flex items-center mb-3">
                            {benefit.icon}
                        </div>
                        <h4 className="text-sm">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoCards
