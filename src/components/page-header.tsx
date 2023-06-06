import React from "react";
import {Button} from "flowbite-react";
import SocialMediaIcons from "@/components/social-media-links";
import {FaArrowDown} from "react-icons/fa";
import Link from "next/link";

export default function PageHeader() {
    function smoothScrollingToService() {
        return () => {
            const element = document.getElementById("my-services");
            if (!!element) element.scrollIntoView({block: "start", behavior: "smooth"})
        };
    }

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
            <div className="mx-auto max-w-screen-xl text-center px-8 lg:py-8">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    I&apos;am Max,</h1>
                <h3 className="mb-4 text-2xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-2xl dark:text-gray-300">
                    Software Engineer, Trainer and Speaker
                </h3>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                    As an experienced software engineer specializing in Flutter, I provide comprehensive
                    training, mentorship, and public speaking services. My goal is to empower you and your
                    team to excel in Flutter development, enabling you to create outstanding digital
                    experiences.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href={"/mentorship"}>
                        <Button gradientDuoTone={"cyanToBlue"} className={"w-full"}>
                            Join the Mentorship Program
                        </Button></Link>
                    <Button gradientDuoTone={"cyanToBlue"} outline onClick={smoothScrollingToService()}>Explore my
                        service</Button>
                </div>
            </div>
            <SocialMediaIcons/>
            <FaArrowDown
                className={"absolute bottom-0 left-1/2 text-3xl text-gray-700 animate-bounce dark:text-gray-200"}
                onClick={smoothScrollingToService()}/>
        </section>
    )
}