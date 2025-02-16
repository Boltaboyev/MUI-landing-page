import React from "react"
import {Button} from "@mui/material"

// img
import homeImg from "../../assets/images/home.png"

// icons
import {MdKeyboardArrowRight} from "react-icons/md"

const Showcase = () => {
    return (
        <div className="container1">
            <div className="flex items-center gap-10 justify-between ">
                <div className="w-[50%] max-[900px]:w-full max-[900px]:text-center max-[900px]:p-10 max-[500px]:p-5 flex flex-col items-start gap-[20px]">
                    <h1 className="text-[55px] font-bold max-[550px]:text-[30px] max-[425px]:text-[25px] leading-[110%]">
                        <span className="text-[#0D7DEC]">Move faster</span> with
                        intuitive React UI tools
                    </h1>
                    <p className="text-[#303741] max-[550px]:text-[14px]">
                        MUI offers a comprehensive suite of free UI tools to
                        help you ship new features faster. Start with Material
                        UI, our fully-loaded component library, or bring your
                        own design system to our production-ready components.
                    </p>
                    <Button
                        variant="contained"
                        className="!py-2 !rounded-xl"
                        endIcon={<MdKeyboardArrowRight />}>
                        Discover the Core libraries
                    </Button>
                </div>
                <div className="relative w-[60%] max-[900px]:hidden">
                    <img className="" src={homeImg} alt />
                </div>
            </div>
        </div>
    )
}

export default Showcase
