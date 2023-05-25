import NavBar from '@/components/navigation';
import {AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
import Image from 'next/image'
import avatar from '../../public/avatar.jpg';
import publicSpeakingImage from '../../public/publicSpeakingImage.png';
import mentoring from '../../public/mentoring.png';
import teaching from '../../public/teaching.png';
import youtube from '../../public/youtube.png';
import Card, {CardProps} from "@/components/card";

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
    // {
    //   title: "YouTube Content Creator",
    //   description: "In addition to my services, I'm also proud to produce educational content about Flutter on YouTube. I aim to cover a wide range of topics, allowing viewers to deepen their knowledge at their own pace. Don't forget to subscribe for regular updates!",
    //   image: youtube, 
    //   readMore: true,
    //   readMoreButtonText: "Watch My YouTube Videos"
    // }    
  ]

    return (
        <div>
            <main className='bg-white px-10 md:px-20 lg:px-40'>
                <section>
                    <NavBar/>
                    <div className='lg:flex'>
                    <div className={"text-center p-3 lg:flex-shrink"}>
                      <h2 className={"text-5xl py-2 text-teal-600 font-medium"}>Max Weber</h2>
                      <h3 className={"text-2xl py-2"}>Expert Flutter Developer, Renowned Trainer, and Public Speaker</h3>
                      <p className={"text-md py-5 leading-8 text-grey-800"}>
                          As an experienced software engineer specializing in Flutter, I provide comprehensive training, mentorship, and public speaking services. My goal is to empower you and your team to excel in Flutter development, enabling you to create outstanding digital experiences.
                      </p>
                    </div>
                  <div className={"relative mx-auto w-60 h-80 bg-gradient-to-br from-cyan-500 rounded-md shadow-xl overflow-hidden"} >
                    <Image src={avatar} alt="Avatar image of Max" fill/>
                  </div>
                  </div>
                  <div className={"text-5xl flex justify-center gap-16 p-10 text-gray-600"}>
                        <AiFillTwitterCircle/>
                        <AiFillLinkedin/>
                        <AiFillYoutube/>
                    </div>
                </section>

              <section>
                <div>
                  <h3 className={"text-3xl py-1 pt-10"}>Our Services</h3>
                  <p className={"text-md py-5 leading-8 text-grey-800"}>Hello, I'm Max Weber, a dedicated Flutter developer with a passion for sharing knowledge. Throughout my career, I've offered various services designed to help individuals and teams master Flutter development. Here are a few key services I'm proud to offer:</p>

                  <div className='lg:flex gap-2'>
                    {cards.map((card)=>Card(card))}
                  </div>
                </div>
              </section>
            </main>
        </div>
    )
}
