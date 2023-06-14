import './globals.css'
import {Inter} from 'next/font/google'
import DynamicBreadcrumb from "@/components/dynamic-breadcrumb";
import FooterWithSocialMediaIcons from "@/components/footer";
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";
import Script from "next/script";
import {Metadata} from "next";
import NavBar from "@/components/nav-bar";
import Providers from "@/components/providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: "Max Weber - Flutter Explained",
    description: "Max Weber, an experienced software engineer, trainer, and public speaker, offers professional training, mentorship programs, and insightful content on Flutter development. Discover Max's services and join a growing community of learners.",
    keywords: "Senior Software Engineer, Trainer, Mentor, Flutter, Dart, Programming, Full Stack Developer, Freelancer",
    authors: {name: "Max Weber"}
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" title={"Max Weber - Flutter Explained"}>
        <Script src="https://cookiehub.net/c2/45f3cb02.js" strategy={"lazyOnload"}/>
        <Script src="./scripts/consent.js" strategy={"lazyOnload"}/>
        <body className={inter.className}>
        <Providers>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-h-full'>
                <div className={"max-w-screen-lg mx-auto pt-4"}>
                    <NavBar/>
                    <div className={"py-5"}><DynamicBreadcrumb/></div>
                    {children}
                </div>
            </main>
        </Providers>
        <FooterWithSocialMediaIcons/>
        <Analytics/>
        </body>
        </html>
    )
}
