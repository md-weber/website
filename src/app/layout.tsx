'use client'

import './globals.css'
import {Inter} from 'next/font/google'
import {useEffect, useState} from "react";
import NavBar from "@/components/nav-bar";
import {Flowbite} from "flowbite-react";
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb";
import FooterWithSocialMediaIcons from "@/components/footer";
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";
import Script from "next/script";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({children,}: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        setDarkMode(darkThemeMq.matches);
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <Flowbite>
            <html lang="en" title={"Max Weber - Flutter Explained"}>
            <Head>
                <title>Max Weber - Flutter Explained</title>
                <meta name="author" content={"Max Weber"}/>
                <meta name="description"
                      content="Max Weber, an experienced software engineer, trainer, and public speaker, offers professional training, mentorship programs, and insightful content on Flutter development. Discover Max's services and join a growing community of learners."/>
                <meta name="keywords"
                      content="Senior Software Engineer, Trainer, Mentor, Flutter, Dart, Programming, Full Stack Developer, Freelancer"/>
            </Head>
            <Script src="https://cookiehub.net/c2/45f3cb02.js" strategy={"lazyOnload"}/>
            <Script src="./scripts/consent.js" strategy={"lazyOnload"}/>
            <body className={inter.className}>
            <div className={darkMode ? 'dark' : ''}>
                <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-full'>
                    <div className={"max-w-screen-lg mx-auto pt-4"}>
                        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
                        <div className={"py-5"}><DynamicBreadcrumb/></div>
                        {children}
                    </div>
                </main>
                <FooterWithSocialMediaIcons/>
            </div>
            <Analytics/>
            </body>
            </html>
        </Flowbite>
    )
}
