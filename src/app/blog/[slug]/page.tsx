import * as fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { findAuthor, findCategory } from "@/components/blog/find-matter";
import getPostMetaData from "@/components/blog/get-post-metadata";
import StructuredData from "@/components/meta/structured-data";
import { PostMetaData } from "@/components/blog/post-metadata";

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
const getPostContent = (slug: string): PostMetaData => {
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
        return { slug: post.slug }
    }
    );
}

function getStructuredData(content: PostMetaData) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: content.title,
        description: content.preview,
        author: [
            {
                '@type': 'Person',
                name: content.author.name,
            },
        ],
        datePublished: content.date,
    };
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    const structuredData = getStructuredData(content);
    return (
        <div className={"m-auto w-100 prose prose-invert sm:prose-2xl"}>
            <StructuredData data={structuredData} />

            <article>
                <h2>{content.title}</h2>
                <Markdown>{content.body}</Markdown>
            </article>
        </div>
    )
}

export default PostPage;