import React from "react"

import spotify from "../../assets/icons/spotify.svg"
import amazon from "../../assets/icons/amazon.svg"
import nasa from "../../assets/icons/nasa.svg"
import netflix from "../../assets/icons/netflix.svg"
import unity from "../../assets/icons/unity.svg"
import shutterstock from "../../assets/icons/shutterstock.svg"

const Brands = () => {
    return (
        <div className="container1 py-10">
            <div className="grid grid-cols-6 items-center p-10 max-[700px]:grid-cols-3 max-[700px]:gap-5 max-[350px]:grid-cols-2">
                <img className="mx-auto" src={spotify} alt="" />
                <img className="mx-auto" src={amazon} alt="" />
                <img className="mx-auto" src={nasa} alt="" />
                <img className="mx-auto" src={netflix} alt="" />
                <img className="mx-auto" src={unity} alt="" />
                <img className="mx-auto" src={shutterstock} alt="" />
            </div>
            <div>
                <p className="text-center font-normal text-[14px] text-[#303741]">
                    The world's best product teams trust MUI to deliver an
                    <br className=" max-[]:" /> unrivaled experience for both
                    developers and users.
                </p>
            </div>
        </div>
    )
}

export default Brands
