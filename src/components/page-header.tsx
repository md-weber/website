import React from "react";
import {Button} from "flowbite-react";
import SocialMediaIcons from "@/components/social-media-links";
import {FaArrowDown} from "react-icons/fa";

export default function PageHeader() {
    return (
        <section className="bg-white dark:bg-gray-900 h-[calc(100vh-5rem)]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome,
                    I'am Max</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    As an experienced software engineer specializing in Flutter, I provide comprehensive
                    training, mentorship, and public speaking services. My goal is to empower you and your
                    team to excel in Flutter development, enabling you to create outstanding digital
                    experiences.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button gradientDuoTone={"cyanToBlue"}>Get Started</Button>
                    <Button gradientDuoTone={"cyanToBlue"} outline>Learn more</Button>
                </div>
            </div>
            <SocialMediaIcons/>
            <FaArrowDown className={"absolute bottom-0 left-1/2 text-3xl text-gray-700 animate-bounce"} onClick={() => {
                const element = document.getElementById("my-services");
                if (!!element) element.scrollIntoView({block: "start", behavior: "smooth"})
            }}/>
        </section>
    )
}