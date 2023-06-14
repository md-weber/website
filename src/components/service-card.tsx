'use client'
import {StaticImageData} from 'next/image'
import {Button, Card} from 'flowbite-react';
import Link from "next/link";

export interface CardProps {
    image: StaticImageData,
    title: string,
    description: string,
    readMore: boolean,
    readMoreButtonText?: string;
    readMoreLink?: string;
}

export default function ServiceCard(prop: CardProps) {
    return (
        <Card key={prop.title} imgAlt={prop.title} imgSrc={prop.image.src} className={"my-2"}>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div>
                    {prop.title}
                </div>
            </h3>
            <div className="font-normal text-gray-700 dark:text-gray-400 grow">
                <div>{prop.description}</div>
            </div>
            {
                prop.readMore &&
                <Link href={prop.readMoreLink!}><Button gradientDuoTone={"cyanToBlue"} className={"w-full"}>
                    {prop.readMoreButtonText}
                </Button></Link>
            }
        </Card>
    )
}