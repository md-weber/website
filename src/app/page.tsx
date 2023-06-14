'use client';
import publicSpeakingImage from '../../public/publicSpeakingImage.png';
import mentoring from '../../public/mentoring.png';
import teaching from '../../public/teaching.png';
import ServiceCard, {CardProps} from "@/components/service-card";
import PageHeader from "@/components/page-header";
import {Button, Card} from "flowbite-react";

export default function Home() {
    const cards: CardProps[] = [
        {
            title: "Professional Training for Companies and Teams",
            description: "With my extensive experience in Flutter development, I provide bespoke training sessions tailored to your specific needs. It's always my goal to ensure your team gets the most out of every training session and comes away with a greater understanding of Flutter.",
            image: teaching,
            readMore: true,
            readMoreButtonText: "Book a Training Session",
            readMoreLink: "/company-training"
        },
        {
            title: "Mentorship Program",
            description: "As part of my commitment to the Flutter community, I run a mentorship program offering one-on-one guidance and support. Whether you're new to Flutter or looking to take your skills to the next level, I'm here to guide you every step of the way.",
            image: mentoring,
            readMore: true,
            readMoreButtonText: "Join the Mentorship Program",
            readMoreLink: "/mentorship"
        },
        {
            title: "Public Speaker at Events",
            description: "Having spoken at a variety of events and conferences, I'm comfortable and experienced in conveying complex Flutter concepts to both small and large audiences. If you're looking for a speaker for your event, don't hesitate to reach out.",
            image: publicSpeakingImage,
            readMore: true,
            readMoreButtonText: "Invite Me to Speak",
            readMoreLink: "/public-speaking"
        },
    ]

    return (
        <>
            <div className={"h-[calc(100vh-5rem)]"}>
                <PageHeader/>
            </div>
            <section>
                <div>
                    <h3 className={"text-3xl py-1 pt-10 dark:text-white"} id={"my-services"}>My services</h3>
                    <p className={"text-md py-5 leading-8 text-grey-800 dark:text-gray-200"}>I am a Full Stack Developer
                        developer with a passion for sharing knowledge. Throughout my career, I&apos;ve offered various
                        services designed to help individuals and teams master Flutter development. Here are a few
                        key services I&apos;m proud to offer:</p>

                    <div className='lg:flex gap-5'>
                        {cards.map((card) => ServiceCard(card))}
                    </div>
                    <Card className={"mt-2"}>
                        <h4 className="font-bold text-xl dark:text-white">Sponsorship</h4>
                        <p className="mt-2 text-grey-800 dark:text-gray-200 flex-grow">You have a great product and
                            would like to promote it on our channel? I&apos;d love to hear about it. Please reach out to
                            us.</p>
                        <Button href="mailto:flutterexp@gmail.com" gradientDuoTone="cyanToBlue">
                            Email us
                        </Button>
                    </Card>

                </div>
            </section>

            <section>
                <h3 className="text-3xl py-1 pt-10 dark:text-white">Other Ways to Learn</h3>
                <p className="text-md py-5 leading-8 text-grey-800 dark:text-gray-200">
                    In addition to the services I offer, you can also learn from me through my podcast and YouTube
                    channel.
                    These platforms allow me to cover a wider range of topics and interact with the community in a more
                    informal setting.
                </p>

                <div className="grid gap-5 justify-center md:flex">
                    <Card>
                        <h4 className="font-bold text-xl dark:text-white">&quot;Beyond Flutter&quot; Podcast</h4>
                        <p className="mt-2 text-grey-800 dark:text-gray-200 flex-grow">A monthly podcast that explores
                            everything related to software engineering. Tune in for insightful discussions and expert
                            takes on the latest trends and topics in the field.</p>
                        <Button href="https://podcast.flutter-explained.dev" gradientDuoTone="cyanToBlue">
                            Listen to the
                            Podcast</Button>
                    </Card>

                    <Card>
                        <h4 className="font-bold text-xl dark:text-white">Flutter Explained YouTube
                            Channel</h4>
                        <p className="mt-2 text-grey-800 dark:text-gray-200 flex-grow">Get your weekly dose of Flutter
                            tips, tricks, and tutorials, and participate in live streaming events. Subscribe now and be
                            a part of a community that&apos;s all about learning and growing together.</p>
                        <Button href="https://www.youtube.com/@FlutterExplained" gradientDuoTone="cyanToBlue">
                            Subscribe on YouTube
                        </Button>
                    </Card>
                </div>
            </section>
        </>
    );
}
