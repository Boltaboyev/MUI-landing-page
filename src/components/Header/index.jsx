import React from "react"
import {Link} from "react-router-dom"

import logo from "../../assets/icons/Logo.svg"
import {ImGithub} from "react-icons/im"
import {IoSearch} from "react-icons/io5"
import {FaMoon} from "react-icons/fa"
import {LuSunMedium} from "react-icons/lu"

const Header = ({isDarkMode, setIsDarkMode, darkmode}) => {
    return (
        <div>
            <div className="container1 py-4 px-5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <img src={logo} alt="" />
                    <ul className="flex max-[800px]:hidden items-center gap-5 text-[14px] font-medium">
                        <li className="cursor-pointer hover:text-[#0073e6]">
                            Products
                        </li>
                        <li className="cursor-pointer hover:text-[#0073e6]">
                            Docs
                        </li>
                        <li className="cursor-pointer hover:text-[#0073e6]">
                            Pricing
                        </li>
                        <li className="cursor-pointer hover:text-[#0073e6]">
                            About us
                        </li>
                        <li className="cursor-pointer hover:text-[#0073e6]">
                            Blog
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <div className="max-[530px]:hidden">
                        <div className="flex items-center gap-1 shadow-xs py-1 px-2 border border-[#dfe2e7] rounded-[12px] w-fit">
                            <IoSearch className="text-[12px]" />
                            <input
                                className={`outline-none text-[12px] ${
                                    darkmode ? "text-white" : ""
                                }`}
                                placeholder="Search..."
                                type="text"
                            />
                            <button className="border border-[#dfe2e7] text-[11px] shadow cursor-pointer rounded-[8px] p-[4px]">
                                Ctrl+K
                            </button>
                        </div>
                    </div>
                    <div className="hidden max-[530px]:block">
                        <button className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2.5">
                            <IoSearch />
                        </button>
                    </div>
                    <Link className="font-bold border flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
                        <ImGithub className="text-[#0073e6]" />
                    </Link>
                    <Link
                        onClick={() => {
                            setIsDarkMode(!isDarkMode)
                            localStorage.setItem(
                                "dark",
                                JSON.stringify(isDarkMode)
                            )
                        }}
                        className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
                        {darkmode ? (
                            <LuSunMedium className="text-[#0073e6]" />
                        ) : (
                            <FaMoon className="text-[#0073e6]" />
                        )}
                    </Link>
                    <div className="hidden max-[800px]:block">
                        <button className="font-bold border  flex items-center justify-center w-fit border-[#dfe2e7] text-[13px] shadow-lg rounded-[12px] p-2">
                            <i className="fa-solid fa-bars text-[18px]"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
