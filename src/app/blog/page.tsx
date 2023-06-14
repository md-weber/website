import * as fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import {findAuthor, findCategory} from "@/components/blog/find-matter";
import Markdown from "markdown-to-jsx";
import {DiDart} from "react-icons/di";
import Image from "next/image";

const getPostMetaData = () => {
    const folder = "content/article/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));

    const posts = markdownPosts.map(file => {
        const fileContents = fs.readFileSync(`content/article/${file}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            slug: matterResult.data.slug,
            body: matterResult.data.body,
            date: Intl.DateTimeFormat('en-GB').format(Date.parse(matterResult.data.date)),
            category: findCategory(matterResult.data.category.id),
            author: findAuthor(matterResult.data.author.id),
            preview: matterResult.data.body.slice(0, 200) + '...'
        }
    });

    return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export default function Blog() {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((metadata) => {
        return (
            <article key={metadata.slug}
                     className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-amber-500 dark:hover:shadow-amber-50 transition-all duration-300">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <div className={"flex items-center"}>
                          <span
                              className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                               Category
                          </span>
                        <span>{metadata.category == "Dart" && <DiDart/>}</span>
                    </div>
                    <span className="text-sm">{metadata.date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href={`/blog/${metadata.slug}`}>
                        {metadata.title}
                    </Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{metadata.preview}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Image
                            className={"bg-teal-300 rounded-full"}
                            src={metadata.author.thumbnailUrl}
                            alt={metadata.author.name}
                            width={30} height={30}
                        />
                        <span
                            className="font-medium dark:text-white"> {metadata.author.name} </span>
                    </div>
                    <a href="#"
                       className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </article>
        )

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