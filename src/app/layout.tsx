'use client'

import './globals.css'
import {Inter} from 'next/font/google'
import {useState} from "react";
import NavBar from "@/components/navigation";
import {Breadcrumb, Flowbite} from "flowbite-react";
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <Flowbite>
            <html lang="en">
            <head>
                <title>Max Weber - Flutter Explained</title>
                <meta name="author" content={"Max Weber"}/>
                <meta name="description"
                      content="Max Weber, an experienced software engineer, trainer, and public speaker, offers professional training, mentorship programs, and insightful content on Flutter development. Discover Max's services and join a growing community of learners."/>
                <meta name="keywords"
                      content="Senior Software Engineer, Trainer, Mentor, Flutter, Dart, Programming, Full Stack Developer, Freelancer"/>
            </head>
            <body className={inter.className}>
            <div className={darkMode ? 'dark' : ''}>
                <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800 min-h-full'>
                    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
                    <div className={"py-5"}><DynamicBreadcrumb/></div>
                    {children}
                </main>
            </div>
            </body>
            </html>
        </Flowbite>
    )
}
