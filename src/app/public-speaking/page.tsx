'use client'
import React from 'react';
import { Button, Card } from "flowbite-react";
import Link from 'next/link';

const PublicSpeakingPage = () => {
    return (
        <div className="container mx-auto px-4 prose dark:prose-invert pb-16">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Public Speaking
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Harness the power of engaging, enlightening, and inspiring tech talks for your next event.
                </p>
            </div>

            <section className="mt-4">
                <h2 className="text-2xl py-1 pt-10 dark:text-white font-bold">Why Max Weber?</h2>
                <p className="mt-2 text-lg">
                    With an impressive repertoire of technical knowledge, practical insights, and real-world
                    experiences, I aim to educate, inspire, and engage your audience. Be it a small workshop or a grand
                    conference, my talks are curated to deliver maximum value to all attendees.
                </p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl py-1 pt-10 dark:text-white font-bold">Past Speaking Engagements</h2>
                <p className="mt-2 text-lg">
                    Over the years, I&apos;ve had the privilege to speak at various events, conferences, and workshops.
                    Here
                    are a few of them:
                </p>
                <div className='lg:flex gap-5'>
                    <Card className={"my-2"}>
                        <p className={"dark:text-white font-bold"}>Geekle - Flutter Global Summit 21</p>
                        <p className={"flex-grow"}>Holistic Introduction into Responsive Design in Flutter</p>
                        <Button href={"https://www.youtube.com/live/BafFTK-YClo?feature=share&t=9367"}>Watch
                            now</Button>
                    </Card>
                    <Card className={"my-2"}>
                        <p className={"dark:text-white font-bold"}>Geekle Global Summit 23</p>
                        <p className={"flex-grow"}>The beautiful world of Flutter Testing</p>
                        <Button href={"https://www.youtube.com/live/BafFTK-YClo?feature=share&t=9367"}>Watch
                            now</Button>
                    </Card>
                    <Card className={"my-2"}>
                        <p className={"dark:text-white font-bold"}>Fluttercon 2023</p>
                        <p className={"flex-grow"}>The beautiful world of Flutter Testing</p>
                        <Button href={"https://www.droidcon.com/2023/08/07/the-beautiful-world-of-testing-in-flutter-mastering-unit-widget-and-integration-tests/"}>Watch
                            now</Button>
                    </Card>
                </div>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl py-1 pt-4 dark:text-white font-bold">Topics I Cover</h2>
                <p className="mt-2 text-lg">
                    My areas of expertise include <Link href={"https://flutter.dev"}>Flutter</Link>, <Link href="https://dart.dev/">Dart</Link>, and cross-platform mobile application development.
                    However, the range of topics I cover is not limited to these. Depending on your event’s theme, I can
                    adapt the talk to cover various aspects of software development, team collaboration, project
                    management, and more.
                </p>
            </section>

            <section className="mt-4">
                <h2 className="text-2xl py-1 pt-4 dark:text-white font-bold">Get Started</h2>
                <p className="mt-2 text-lg">
                    Ready to captivate your audience with an engaging tech talk? Click the button below to book a date
                    for a consultation or shoot me an email for further discussions.
                </p>
                <div className="mt-4 flex">
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
    );
};

export default PublicSpeakingPage;
