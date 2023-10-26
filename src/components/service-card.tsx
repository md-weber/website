"use client";
import { StaticImageData } from "next/image";
import { Card } from "flowbite-react";

export interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  readMore: boolean;
  readMoreButtonText?: string;
  readMoreLink?: string;
}

export default function ServiceCard(props: CardProps) {
  return (
    <div key={props.title}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
