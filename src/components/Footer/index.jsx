import React from "react"

// img
import logo from "../../assets/icons/logo.svg"

const Footer = () => {
    return (
        <footer className="p-4 !pt-[50px] sm:p-6 bg-[#0f1214]">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-8"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                MUI
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {[
                            {
                                title: "Resources",
                                links: [
                                    {
                                        name: "MUI",
                                    },
                                    {
                                        name: "Tailwind CSS",
                                    },
                                ],
                            },
                            {
                                title: "Follow us",
                                links: [
                                    {
                                        name: "Github",
                                    },
                                    {
                                        name: "Discord",
                                    },
                                ],
                            },
                            {
                                title: "Legal",
                                links: [
                                    {name: "Privacy Policy", url: "#"},
                                    {name: "Terms & Conditions", url: "#"},
                                ],
                            },
                        ].map((section, index) => (
                            <div key={index}>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    {section.title}
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="mb-4">
                                            <a className="hover:underline">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <a className="hover:underline">MUI</a>. All Rights
                        Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        {[
                            {
                                name: "Facebook",
                                icon: "fab fa-facebook",
                            },
                            {
                                name: "Instagram",
                                icon: "fab fa-instagram",
                            },
                            {name: "Twitter", icon: "fab fa-twitter", url: "#"},
                            {name: "Github", icon: "fab fa-github", url: "#"},
                        ].map((social, index) => (
                            <a
                                key={index}
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                aria-label={social.name}>
                                <i className={`${social.icon} text-lg`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
