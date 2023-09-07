import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReferenceCard from "@/components/about-me/reference-card";

export default function AboutMe() {
    return (
        <div className={"m-auto pb-4 prose prose-xl dark:prose-invert"}>
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    About
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 pb-3">Max Weber</p>
                <Image className="m-auto rounded-full w-48 h-48 object-contain bg-gradient-to-tr  from-cyan-200 to-blue-500 border-black shadow-md" src={"/images/website_weber.png"} alt={"Profile Image of Max Weber"} width={300} height={300}></Image>
                <p className={"py-1"}>
                    I am a Software Engineer with a decade of experience in variouse programming languages and across
                    different disciplines in development.
                </p>
                <p className={"py-1"}>My career started as a Consultant for CRM and was mainly focused on the Web
                    Framework OpenUI for Siebel where he accomplished some tremendous milestones for my customers.</p>

                <p className={"py-1"}>Later I started as a Freelancer to work for various enterprise customers such as
                    Swisscom, Diligent and Quoniam. In that time I was able to deliver great results and supported to
                    build software for thousands of active users today. </p>

                <p className={"py-1"}> In that time Max decided to add a new skill to his belt and started a YouTube
                    channel <Link href={"youtube.com/@flutterexplained"}>Flutter Explained</Link> that currently has
                    more than 30.000 subscribers from all over the world.</p>

                <p className={"py-1"}> If you are looking for someone who has multiple skills in Full Stack Software
                    Engineering, CI / CD and Project Management. As well someone who is able to learn fast and efficient
                    new skills across the industry, then do not wait longer and <Link href={"mailto:hire@flutter-explained.dev"}>contact</Link> me right away.</p>

                <h3>The opinion of valued colleagues</h3>
                <ReferenceCard name="Jonas Pietzsch"
                    referenceText="In addition to his technical skills, Max has excellent communication skills, making it easy for him to collaborate with team members, understand product and organization requirements, and provide insightful recommendations. It was especially valuable to perform joint pair programming and problem solving sessions as well as product-related refinements."
                    position="Senior Software Engineer"
                    avatarURL="/images/profiles/jonas_pietzsch.jpeg"
                    company={"FINN"} />

            </div>

        </div>
    );
}