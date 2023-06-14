import * as fs from "fs";
import Link from "next/link";

const getPostMetaData = () => {

    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));
    return markdownPosts.map(file => file.replace(".md", ""));
}

export default function Blog() {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((slug) => {
        return (
            <div key={slug}>
                <Link href={"/posts/" + slug}>
                    <h2>{slug}</h2>
                </Link>
            </div>)
    })
    return (
        <div className={"m-auto"}>
            <h1 className={"text-4xl font-semibold text-gray-800 dark:text-white"}>Blog</h1>
            <section className={"mt-6 dark:text-gray-300"}>
                <div>
                    <p>🤟 Welcome to my tech blog 💻</p>
                    {postPreviews}
                </div>
            </section>
        </div>
    )
}