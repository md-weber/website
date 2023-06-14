import fs from "fs";
import matter from "gray-matter";

export const findAuthor = (authorId: string) => {
    const fileContents = fs.readFileSync(`content/author/${authorId}.md`, "utf8");
    const matterResult = matter(fileContents);
    return {
        name: matterResult.data.name,
        thumbnailUrl: `https://${matterResult.data.thumbnail.url}`
    }
}

export const findCategory = (categoryId: string) => {
    const fileContents = fs.readFileSync(`content/category/${categoryId}.md`, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.name;
}