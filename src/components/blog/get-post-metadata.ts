import fs from "fs";
import matter from "gray-matter";
import {findAuthor, findCategory} from "@/components/blog/find-matter";

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


export default getPostMetaData;