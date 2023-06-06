'use client'
import React from 'react';
import {Button} from "flowbite-react";
import Link from "next/link";

const Mentorship = () => {
    return (
        <div className={"m-auto"}>
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">Mentorship Program</h2>

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
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Program Overview</h3>
                <p className="my-2 text-gray-600 dark:text-gray-400">Welcome to the Full-Stack Mastery Program, a
                    mentorship journey designed with you in mind.

                    In this unique mentorship program, you&apos;ll be taken on an immersive journey to become a proficient
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
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Mentorship Program Packages</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">[Your Program Packages]</p>
            </section>

            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Testimonials</h3>
                <p className="mt-2 text-gray-600">[Your Testimonials]</p>
            </section>

            <section className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Frequently Asked Questions</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">[Your FAQs]</p>
            </section>

            <section className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-200">Ready to Begin Your
                    Journey?</h3>
                <Link href={"https://flutterexplained.gumroad.com/l/ydgtfV"} target={"_blank"}>
                    <Button className="w-full" gradientDuoTone={"cyanToBlue"}>
                        Sign Up for the Program
                    </Button></Link>
            </section>
        </div>
    );
};

export default Mentorship;
