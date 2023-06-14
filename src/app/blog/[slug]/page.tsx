import * as fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import {findAuthor, findCategory} from "@/components/blog/find-matter";
import styles from './slug.module.css';
import getPostMetaData from "@/components/blog/get-post-metadata";

const getFileForSlug = (slug: string): string => {
    const folder = "content/article/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));

    for (const file of markdownPosts) {
        const fileContents = fs.readFileSync(`${folder}${file}`, "utf8");
        const matterResult = matter(fileContents);
        if (matterResult.data.slug == slug) {
            return file;
        }
    }
    throw Error("File not found");
}
const getPostContent = (slug: string) => {
    const file = getFileForSlug(slug);
    const fileContents = fs.readFileSync(`content/article/${file}`, "utf8");
    const matterResult = matter(fileContents);
    return {
        title: matterResult.data.title,
        slug,
        body: matterResult.data.body,
        date: matterResult.data.date,
        category: findCategory(matterResult.data.category.id),
        author: findAuthor(matterResult.data.author.id),
    }
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData();

    return posts.map(post => {
            return {slug: post.slug}
        }
    );
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <section className={"mt-6 dark:text-gray-300"}>
            <h1 className={"text-4xl mb-6 font-semibold text-gray-800 dark:text-white"}>{content.title}</h1>
            <Markdown>{content.body}</Markdown>
        </section>
    )
}

export default PostPage;