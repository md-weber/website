'use client'
import React from 'react';
import {Button} from "flowbite-react";
import Head from "next/head";

const ProfessionalTrainingPage = () => {
    return (
        <>
            <div className="p-8 text-gray-500 dark:text-gray-400">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Professional Flutter Training for Companies
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Improve your team&apos;s Flutter skills with a customized training program. Suitable for
                        companies and teams of all sizes.
                    </p>
                </div>
                <section className="mb-8">
                    <h2 className="text-2xl py-1 pt-10 dark:text-white">Why Choose My Training Program?</h2>
                    <p className="mt-2  text-gray-500 dark:text-gray-400">
                        With years of experience in Flutter development and training, I offer a unique combination of
                        expertise, understanding, and personalized attention to all clients. The training program is not
                        a one-size-fits-all approach, but it&apos;s tailored to meet your team&apos;s specific needs.
                    </p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        The program can come in various forms to fit your team&apos;s requirements. For example, I can
                        provide an in-depth, three-day Flutter training course for your team, which covers everything
                        they need to know about Flutter. This in-house training is an excellent way to boost your
                        team&apos;s
                        skills and confidence in a short period of time.
                    </p>
                    <p className="mt-2  text-gray-500 dark:text-gray-400">
                        Alternatively, I can offer project-based support for your team. If your team is working on an
                        upcoming Flutter project and needs expert guidance along the way, this option would be ideal.
                        With this support, your team can leverage my experience and expertise to navigate any challenges
                        they may encounter, thereby ensuring the project&apos;s success.
                    </p>
                </section>

                <section className="mb-8 text-gray-500 dark:text-gray-400">
                    <h2 className="text-2xl py-1 pt-10 dark:text-white">What Does the Training Include?</h2>
                    <p className="mt-2 text-lg py-1">
                        The training is meticulously designed to cover a comprehensive range of topics in Flutter
                        development. Here&apos;s an overview of what the training program typically includes:
                    </p>
                    <div className={"py-2"}>
                        <strong className={"dark:text-white"}>Deep Dive into Flutter:</strong>
                        <p>An in-depth exploration of Flutter, covering its architecture, the Dart language, and how
                            it compares to other frameworks.</p>
                    </div>
                    <div className={"py-2"}>
                        <strong className={"dark:text-white"}>Flutter UI Building:</strong>
                        <p>Extensive coverage of building user interfaces in Flutter. We&apos;ll dive into widgets,
                            state
                            management, animations, theming, and more.</p>
                    </div>
                    <div className={"py-2"}>
                        <strong className={"dark:text-white"}>Flutter Best Practices:</strong>
                        <p>Learn the dos and don&apos;ts of Flutter development. This includes code structure,
                            performance optimizations, testing, and continuous integration practices.</p>
                    </div>
                    <div className={"py-2"}>
                        <strong className={"dark:text-white"}>Real-World Project:</strong>
                        <p>Apply what you&apos;ve learned in a real-world project. This project will give your team a
                            chance to put theory into practice and understand how everything fits together in a
                            complete Flutter application. </p>
                    </div>
                    <div className={"py-2"}>
                        <strong className={"dark:text-white"}>Post-training Support:</strong>
                        <p>I offer post-training support to answer any additional questions your team might have as
                            they continue their Flutter journey.</p>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl py-1 pt-10 dark:text-white font-bold">Get Started</h2>
                    <p className="mt-2 py-2">
                        I&apos;m committed to delivering a Flutter training experience that suits your team&apos;s
                        needs. To
                        kickstart the process, please book a date for a consultation. During this call, we can discuss
                        your requirements, explore possible training agendas, and determine how to maximize the value
                        your team will get from the training.
                    </p>
                    <div className="flex">
                        <Button className={"flex-1"} href={"https://calendly.com/flutterexp/session"}
                                gradientDuoTone={"cyanToBlue"}>
                            Book a Consultation
                        </Button>
                        <div className={"px-1"}></div>
                        <Button className={"flex-1"} href={"mailto:info@flutter-explained.dev"}
                                gradientDuoTone={"cyanToBlue"} outline>
                            Email me
                        </Button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProfessionalTrainingPage;
