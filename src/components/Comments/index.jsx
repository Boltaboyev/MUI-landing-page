import React from "react"

// img
import user1 from "../../assets/images/user/1.jfif"
import user2 from "../../assets/images/user/2.jfif"
import user3 from "../../assets/images/user/3.jfif"
import user4 from "../../assets/images/user/4.jfif"

// icons
import logo1 from "../../assets/icons/comment/1.svg"
import logo2 from "../../assets/icons/comment/2.svg"
import logo3 from "../../assets/icons/comment/3.svg"
import logo4 from "../../assets/icons/comment/4.svg"

const Comment = () => {
    return (
        <section className="py-[100px] bg-[#0f1214] border-b border-[#b2b2b221]">
            <div className="container1 flex flex-col gap-[30px]">
                <div className="flex flex-col gap-0">
                    <h3 className="text-blue-500 font-medium text-[14px]">
                        Join the community
                    </h3>
                    <h2 className="text-3xl font-bold mt-2 text-white">
                        Supported by thousands of <br />
                        <span className="text-blue-500">
                            developers and designers
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col overflow-hidden rounded-xl border border-[#3d47514c]">
                    <div className="border-b border-[#3d47514c] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-to-b from-[rgba(0,59,117,0.1)] to-transparent p-[30px] text-center">
                        {[
                            {label: "Weekly downloads on npm", value: "5.8M"},
                            {label: "Stars on GitHub", value: "93.9k"},
                            {label: "Open-source contributors", value: "3.0k"},
                            {label: "Followers on X", value: "19.2k"},
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col gap-0">
                                <h1 className="font-roboto font-semibold text-[30px] leading-[150%] tracking-[0.01em] text-[#9cf]">
                                    {item.value}
                                </h1>
                                <p className="font-ibm text-[14px] font-normal leading-[150%] text-[#b6bec9]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        {[
                            {
                                text: `"We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Data Grid are so worth it. Every other library I try has 80% of what I'm looking for when it comes to complex use cases, Material UI has it all under one roof which is a huge help for our small team."`,
                                user: user1,
                                name: "Kyle Gill",
                                role: "Engineer & Designer",
                                logo: logo1,
                            },
                            {
                                text: `"Material UI looks great and lets us deliver fast, thanks to their solid API design and documentation - it's refreshing to use a component library where you get everything you need from their site rather than Stack Overflow. We think the upcoming version, with extra themes and customizability, will make Material UI even more of a game changer. We're extremely grateful to the team for the time and effort spent maintaining the project."`,
                                user: user2,
                                name: "Jean-Laurent de Morlhon",
                                role: "VP of Engineering",
                                logo: logo2,
                            },
                            {
                                text: `"Material UI offers a wide variety of high quality components that have allowed us to ship features faster. It has been used by more than a hundred engineers in our organization. What's more, Material UI's well architected customization system has allowed us to differentiate ourselves in the marketplace."`,
                                user: user3,
                                name: "Joona Rahko",
                                role: "Staff Software Engineer",
                                logo: logo3,
                            },
                            {
                                text: `"After much research on React component libraries, we decided to ditch our in-house library for Material UI, using its powerful customization system to implement our Design System. This simple move did a rare thing in engineering: it lowered our maintenance costs while enhancing both developer and customer experience. All of this was done without sacrificing the organization's branding and visual identity."`,
                                user: user4,
                                name: "Gustavo de Paula",
                                role: "Specialist Software Engineer",
                                logo: logo4,
                            },
                        ].map((comment, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-between gap-[40px] p-[20px] border-[#3d47514c] ${
                                    index < 2 ? "border-b" : ""
                                } ${index % 2 !== 0 ? "border-l" : ""}`}>
                                <p className="font-ibm text-[15px] font-normal leading-[160%] text-[#dfe2e7]">
                                    "{comment.text}"
                                </p>
                                <div className="flex justify-between items-center gap-[20px]">
                                    <div className="flex items-center gap-[10px]">
                                        <div className="overflow-hidden h-[50px] w-[50px] rounded-full flex justify-center items-center border border-[#004d99]">
                                            <img
                                                src={comment.user}
                                                alt="user"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0">
                                            <h3 className="font-ibm text-[14px] font-semibold leading-[150%] text-white">
                                                {comment.name}
                                            </h3>
                                            <p className="font-normal text-[#b6bec9] text-[14px]">
                                                {comment.role}
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={comment.logo}
                                        alt="logo"
                                        className="w-[60px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comment
