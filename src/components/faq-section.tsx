"use client";

import React from "react";

export interface FAQProps {
  faqItems: { title: string; body: string }[];
}

export default function FAQSection(props: FAQProps) {
  return (
    <div className="collapse">
      {props.faqItems.map((item, index) => (
        <div className="collapse-title" key={`${item.title}-${index}`}>
          <div
            className={
              "text-2xl font-semibold text-gray-800 dark:text-gray-200"
            }
          >
            {item.title}
          </div>
          <div className="collapse-content">
            <div className={"my-2 text-gray-600 dark:text-gray-400"}>
              {item.body}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
