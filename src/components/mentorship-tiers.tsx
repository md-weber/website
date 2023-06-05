'use client'
import React from 'react';
import {Button, Card} from "flowbite-react";

const MentorshipTiers = () => {
    const tiers = [
        {
            name: "Starter",
            price: "150 €",
            hours: "1 Hour",
            description: "Ideal for those who need guidance on specific topics or issues. Get your questions answered and clarify your doubts.",
            target: "People new to the field or those who need answers to specific questions."
        },
        {
            name: "Journeyman",
            price: "550 €",
            hours: "4 Hours",
            description: "Perfect for learners seeking comprehensive guidance. We will dive deeper into your chosen topics and cover them thoroughly.",
            target: "Learners who are familiar with the basics and want to delve deeper into specific topics."
        },
        {
            name: "Masterclass",
            price: "1400 €",
            hours: "12 Hours",
            description: "In-depth mentoring over a longer period, we will cover multiple areas of your choice, giving you a well-rounded understanding.",
            target: "Individuals seeking in-depth understanding and knowledge in their field of interest."
        }
    ];

    return (
        <div className="flex gap-5 flex-wrap lg:flex-nowrap">
            {tiers.map((tier, index) => (
                <Card key={index}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>{tier.name}</p>
                    </h5>
                    <p className={"font-normal text-gray-800 dark:text-gray-300"}><b>{tier.price} for {tier.hours}</b>
                    </p>
                    <p className={"font-normal text-gray-700 dark:text-gray-400"}>{tier.description}</p>
                    <p className="font-bold tracking-tight text-gray-900 dark:text-white"><b>Who is this for:</b></p>
                    <p className={"font-normal text-gray-700 dark:text-gray-400 flex-grow"}>{tier.target}</p>
                    <div className="justify-end card-actions">
                        <Button href={`/checkout/${tier.name.toLowerCase()}`} gradientDuoTone={"cyanToBlue"} outline>
                            Checkout
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default MentorshipTiers;