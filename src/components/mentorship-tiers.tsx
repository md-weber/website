"use client";
import React from "react";

const MentorshipTiers = () => {
  const tiers = [
    {
      name: "Starter",
      price: "199 €",
      hours: "1 Hour",
      description:
        "Ideal for those who need guidance on specific topics or issues. Get your questions answered and clarify your doubts.",
      target:
        "People new to the field or those who need answers to specific questions.",
      checkoutLink: "https://flutterexplained.gumroad.com/l/mentorship",
    },
    {
      name: "Journeyman",
      price: "729 €",
      hours: "5 Hours",
      description:
        "Perfect for learners seeking comprehensive guidance. We will dive deeper into your chosen topics and cover them thoroughly.",
      target:
        "Learners who are familiar with the basics and want to delve deeper into specific topics.",
      checkoutLink: "https://flutterexplained.gumroad.com/l/mentorship",
    },
    {
      name: "Masterclass",
      price: "1500 €",
      hours: "12 Hours",
      description:
        "In-depth mentoring over a longer period, we will cover multiple areas of your choice, giving you a well-rounded understanding.",
      target:
        "Individuals seeking in-depth understanding and knowledge in their field of interest.",
      checkoutLink: "https://flutterexplained.gumroad.com/l/mentorship",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap lg:flex-nowrap py-4 prose dark:prose-invert prose-xl">
      {tiers.map((tier, index) => (
        <div key={index} className="bg-slate-800 p-4 rounded-lg flex flex-col ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tier.name}
          </h5>
          <h6 className={"font-normal text-gray-800 dark:text-gray-300"}>
            <b>
              {tier.price} for {tier.hours}
            </b>
          </h6>
          <p className={"font-normal text-gray-700 dark:text-gray-400"}>
            {tier.description}
          </p>
          <h6 className="font-bold tracking-tight text-gray-900 dark:text-white">
            <b>Who is this for:</b>
          </h6>
          <p
            className={"font-normal text-gray-700 dark:text-gray-400 flex-grow"}
          >
            {tier.target}
          </p>
          <div className="justify-end card-actions">
            <button
              className="btn btn-outline"
              //href={tier.checkoutLink}
              //gradientDuoTone={"cyanToBlue"}
              //outline
            >
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorshipTiers;
