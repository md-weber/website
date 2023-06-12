'use client';

import {Accordion} from 'flowbite-react';
import React from "react";

export interface FAQProps {
    faqItems: { title: string, body: string }[]
}

export default function FAQSection(props: FAQProps) {
    return (
        <Accordion>
            {props.faqItems.map((item, index) => (
                <Accordion.Panel key={`${item.title}-${index}`}>
                    <Accordion.Title>
                        <div className={"text-2xl font-semibold text-gray-800 dark:text-gray-200"}>{item.title}</div>
                    </Accordion.Title>
                    <Accordion.Content>
                        <div className={"my-2 text-gray-600 dark:text-gray-400"}>{item.body}</div>
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion>
    )
}