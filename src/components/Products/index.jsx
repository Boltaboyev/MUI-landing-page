import React, {useState} from "react"

// icons
import code from "../../assets/images/code.png"
import card1 from "../../assets/icons/logo.svg"
import card2 from "../../assets/icons/card/1.svg"
import card3 from "../../assets/icons/card/2.svg"
import card4 from "../../assets/icons/card/3.svg"
import card5 from "../../assets/icons/card/4.svg"

const products = [
    {
        id: 1,
        img: card1,
        title: "Material UI",
        desc: "Foundational components for shipping features faster.",
    },
    {
        id: 2,
        img: card2,
        title: "Design Kits",
        desc: "Beautiful and customizable design resources.",
    },
    {
        id: 3,
        img: card3,
        title: "Templates",
        desc: "Production-ready templates to accelerate development.",
    },
    {
        id: 4,
        img: card4,
        title: "Themes",
        desc: "Customizable themes to match your brand.",
    },
    {
        id: 5,
        img: card5,
        title: "MUI X",
        desc: "Advanced components for complex use cases.",
    },
]

const Products = () => {
    const [selected, setSelected] = useState(null)

    return (
        <div className="bg-gradient-to-b from-transparent to-[#ebf5ff30] py-10">
            <div className="container1 grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                <div>
                    <h1 className="text-[14px] text-[#0073e6] font-bold">
                        Products
                    </h1>
                    <h1 className="text-[36px] font-bold leading-tight">
                        Every component you need is{" "}
                        <span className="text-[#0073e6]">
                            ready for production
                        </span>
                    </h1>
                    <p className="font-normal py-2 text-gray-600">
                        Build at an accelerated pace without sacrificing
                        flexibility or control.
                    </p>

                    <div className="flex flex-col gap-3 mt-4">
                        {products.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => setSelected(product.id)}
                                className={`cursor-pointer flex items-center gap-5 px-5 py-4 border rounded-[15px] transition-all duration-300 ${
                                    selected === product.id
                                        ? "border-[#66b3ff] bg-[#F2F8FF] shadow-md"
                                        : "border-gray-200 bg-white"
                                }`}>
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-10 h-10"
                                />
                                <div className="text-start">
                                    <h4 className="text-[14px] font-bold">
                                        {product.title}
                                    </h4>
                                    <p className="text-gray-600 text-[13px]">
                                        {product.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={code} alt="Code" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Products
