import {Button} from "@mui/material"
import {MdKeyboardArrowRight} from "react-icons/md"

const HeroSection = () => {
    return (
        <section className="flex flex-col gap-[15px] items-center justify-center py-[100px] text-center bg-[#0f1214] bg-gradient-to-t from-[rgba(0,59,117,0.1)] to-transparent px-4">
            <p className="text-blue-500 font-medium text-sm">Start now</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
                Ship your next project{" "}
                <span className="text-blue-500">faster</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
                Find out why MUI's tools are trusted by thousands of open-source
                developers and teams around the world.
            </p>
            <Button
                variant="contained"
                className="!py-2 !rounded-xl !mt-2"
                endIcon={<MdKeyboardArrowRight />}>
                Discover the Core libraries
            </Button>
        </section>
    )
}

export default HeroSection
