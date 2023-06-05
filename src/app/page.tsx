'use client';
import publicSpeakingImage from '../../public/publicSpeakingImage.png';
import mentoring from '../../public/mentoring.png';
import teaching from '../../public/teaching.png';
import ServiceCard, {CardProps} from "@/components/service-card";
import PageHeader from "@/components/page-header";

export default function Home() {
    const cards: CardProps[] = [
        {
            title: "Professional Training for Companies and Teams",
            description: "With my extensive experience in Flutter development, I provide bespoke training sessions tailored to your specific needs. It's always my goal to ensure your team gets the most out of every training session and comes away with a greater understanding of Flutter.",
            image: teaching,
            readMore: true,
            readMoreButtonText: "Book a Training Session"
        },
        {
            title: "Mentorship Program",
            description: "As part of my commitment to the Flutter community, I run a mentorship program offering one-on-one guidance and support. Whether you're new to Flutter or looking to take your skills to the next level, I'm here to guide you every step of the way.",
            image: mentoring,
            readMore: true,
            readMoreButtonText: "Join the Mentorship Program"
        },
        {
            title: "Public Speaker at Events",
            description: "Having spoken at a variety of events and conferences, I'm comfortable and experienced in conveying complex Flutter concepts to both small and large audiences. If you're looking for a speaker for your event, don't hesitate to reach out.",
            image: publicSpeakingImage,
            readMore: true,
            readMoreButtonText: "Invite Me to Speak"
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
                </div>
            </section>
        </>
    );
}
