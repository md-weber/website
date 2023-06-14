'use client'
import React from 'react';
import Image from 'next/image';
import MentorshipTiers from "@/components/mentorship-tiers";
import TestimonialImage from '../../../public/yvis_fricker.jpg';
import FAQSection, {FAQProps} from "@/components/faq-section";

const mentorshipFAQ: FAQProps["faqItems"] = [
    {
        title: "Is the mentorship program suitable for a Flutter developer already employed at a software company?",
        body: "Absolutely! The mentorship program is designed to accommodate developers at various stages in their careers, including those already employed. Whether you're looking to enhance your current skill set, or solve unique challenges you encounter at work, this program can provide valuable insight. If confidentiality is a concern, I am happy to sign a Non-Disclosure Agreement (NDA) so that we can discuss work-related subjects more openly."
    },
    {
        title: "I'm a beginner in Flutter development, is this mentorship program right for me?",
        body: "Definitely! The mentorship program is tailored to meet you where you're at in your learning journey. As a beginner, you'll receive fundamental guidance, resources, and hands-on projects to build a strong foundation in Flutter development. The program aims to equip you with the skills and confidence to tackle more advanced topics over time."
    },
    {
        title: "What kind of time commitment is expected for this mentorship program?",
        body: "The mentorship program is flexible and can adapt to your schedule. While it's recommended to commit a consistent amount of time each week for learning and coding, the specifics can be adjusted based on your availability and personal goals. Remember, the more time and effort you invest, the more progress you're likely to make!"
    },
    {
        title: "How are the mentorship sessions conducted?",
        body: "The mentorship sessions are conducted online, typically through video calls on platforms like Discord. This allows for a personalised and interactive learning experience, no matter where you are in the world. These sessions provide opportunities for live coding, immediate feedback, and direct communication to enhance your learning."
    }
]

const Mentorship = () => {
    return (
        <div className={"m-auto"}>
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Mentorship Program
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Welcome to your journey!
                </p>
            </div>
            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Program Overview</h3>
                <p className="my-2 text-gray-600 dark:text-gray-400">Welcome to the Full-Stack Mastery Program, a
                    mentorship journey designed with you in mind.

                    In this unique mentorship program, you&apos;ll be taken on an immersive journey to become a
                    proficient
                    Full Stack Developer under my guidance. As an industry expert with several years of experience
                    across various programming frameworks and languages, my mission is to provide you with the tools,
                    knowledge, and confidence to thrive in your career as a developer.
                </p>

                <h4 className="text-lg text-gray-800 dark:text-gray-200">What to Expect</h4>
                <ul className="mt-2 text-gray-600 list-disc list-inside dark:text-gray-400">
                    <li>Personalized Development Plan</li>
                    <li>Regular One-on-One Sessions</li>
                    <li>Real-World Coding Projects</li>
                    <li>Continuous Feedback and Improvement</li>
                </ul>
                <p className={"mt-2 text-gray-600 dark:text-gray-400"}>
                    Whether you&apos;re seeking to elevate your existing skills or making a career transition, this
                    mentorship program is designed to set you on the path to success in the world of Full Stack
                    Development.

                    Together, let&apos;s embark on this exciting journey.
                </p>
            </section>

            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">A Special Welcome Note</h3>
                <div className="mt-4">
                    <iframe className={"aspect-video w-full lg:w-1/2"}
                            src="https://www.youtube.com/embed/8nJpxM4TvH0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </section>

            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Mentorship Program Packages</h3>
                <MentorshipTiers/>
            </section>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 py-2">What my customers say</h3>
            <section className="bg-white dark:bg-gray-900 mt-6">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"/>
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">&quot;I am super happy to
                                have
                                Max as my coding mentor. He has a vast amount of knowledge not only regarding flutter,
                                but also about software engineering in general.<br/><br/>
                                Working with him on my personal projects has improved my developer skills tremendously.
                                Knowing that I consistently get high quality feedback helps me stay motivated and
                                overcome roadblocks. I whole heartedly recommend Max as a mentor!&quot;
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image className=" rounded-full"
                                   src={TestimonialImage}
                                   alt="profile picture" width={50} height={50}/>
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Yvis Fricker</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 pb-4">Frequently Asked
                    Questions</h3>
                <FAQSection faqItems={mentorshipFAQ}/>
            </section>

        </div>
    );
};

export default Mentorship;