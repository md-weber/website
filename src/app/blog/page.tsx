import * as fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import {findAuthor, findCategory} from "@/components/blog/find-matter";
import Markdown from "markdown-to-jsx";
import {DiDart} from "react-icons/di";
import Image from "next/image";
import getPostMetaData from "@/components/blog/get-post-metadata";
import PostPreview from "@/components/blog/post-preview";

export default function Blog() {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((metadata) => {
        return (<PostPreview {...metadata} key={metadata.slug}/>)
    })
    return (
        <div className={"m-auto"}>
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our
                    Blog</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Welcome to our Flutter / Tech
                    Blog</p>
            </div>
            <section className={"mt-6 dark:text-gray-300"}>
                <div className="grid gap-8 lg:grid-cols-2">
                    {postPreviews}
                </div>
            </section>
        </div>
    )
}