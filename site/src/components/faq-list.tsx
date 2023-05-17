import React, {useState} from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <h4>
        <span>{question}</span>
        <span className="icon">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </h4>
      <p className={`faq-answer ${isOpen ? "open" : ""}`}>{answer}</p>
    </div>
    );
};


const FAQs: React.FC = () => {
    const faqList = [
        {
            question: "What is Flutter and why should I use it for my project?",
            answer: "Flutter is an open-source UI software development kit created by Google. It allows developers to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter's hot reload helps you quickly and easily experiment, build UIs, add features, and fix bugs. If you're looking for a way to create high-quality, interactive user experiences that can run across multiple platforms, Flutter might be the perfect fit for your project."
        },
        {
            question: "I'm new to coding, can I still learn Flutter?",
            answer: "Absolutely! While having some understanding of programming concepts can be beneficial, Flutter is known for its easy-to-understand documentation and active community support. My training and content are designed to accommodate all skill levels, including beginners. It's never too late to start learning Flutter!"
        },
        {
            question: "What's included in your company training programs?",
            answer: "My company training programs are fully customized to meet your business needs. They usually involve interactive coding sessions, project work, problem-solving exercises, and a deep dive into Flutter and Dart. The main objective is to equip your team with the necessary skills and knowledge to build high-quality Flutter applications."
        },
        {
            question: "What can I expect from the mentorship program?",
            answer: "In the mentorship program, you'll receive one-on-one guidance tailored to your Flutter learning journey. This could involve code reviews, help with project work, targeted learning exercises, and expert advice to overcome development challenges. My goal is to provide you with the support you need to become a confident and competent Flutter developer."
        },
        {
            question: "I'm an experienced developer, will I still benefit from your trainings?",
            answer: "Definitely! Even if you're an experienced developer, there's always something new to learn. My training programs are designed to cater to all skill levels. For seasoned developers, I focus more on advanced topics, best practices, efficient coding techniques, and the latest updates in Flutter and Dart. The personalized nature of the training ensures that you get the most out of it, no matter your experience level."
        },
        {
            question: "How are your trainings adapted to my business needs?",
            answer: "Before starting a training program, I take the time to understand your business, your team's current skill level, and your specific objectives. This allows me to create a tailored training plan that targets your unique needs and challenges. The goal is not just to teach Flutter, but to empower your team to build solutions that drive your business forward."
        },
        {
            question: "What is Dart and how does it relate to Flutter?",
            answer: "Dart is the programming language used to code Flutter apps. Dart syntax is easy to understand for JavaScript or Java developers as it supports most of the object-oriented concepts. It's easy to get started with, yet powerful enough to create high-performance systems. When you're learning Flutter, you're also learning Dart."
        },
    ];

    return (
        <div className="faq-list">
            {faqList.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer}/>
            ))}
        </div>
    );
};

export default FAQs;
