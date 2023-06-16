import fs from "fs";
import matter from "gray-matter";
import {findAuthor, findCategory} from "@/components/blog/find-matter";
import {PostMetaData} from "@/components/blog/post-metadata";

const getPostMetaData = (): PostMetaData[] => {
    const folder = "content/article/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));

    return markdownPosts.map(file => {
        const fileContents = fs.readFileSync(`content/article/${file}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            slug: matterResult.data.slug,
            body: matterResult.data.body,
            date: new Date(Date.parse(matterResult.data.date)),
            category: findCategory(matterResult.data.category.id),
            author: findAuthor(matterResult.data.author.id),
            preview: matterResult.data.body.slice(0, 200) + '...'
        } as PostMetaData;
    });
}


export default getPostMetaData;