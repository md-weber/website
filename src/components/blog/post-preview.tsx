import Link from "next/link";
import Image from "next/image";
import { PostMetaData } from "@/components/blog/post-metadata";
import { SiDart, SiFlutter } from "react-icons/si";
import Markdown from "markdown-to-jsx";
import MaxWeber from '../../../public/images/website_weber.png'
import MahtabTadayon from '../../../public/images/mahtab.png'

const PostPreview = (props: PostMetaData) => {
    return (
        <article key={props.slug}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-amber-500 dark:hover:shadow-amber-50 transition-all duration-300">
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center text-gray-500">
                    <div className={"flex items-center"}>
                        <span>{props.category == "Dart" &&
                            <SiDart
                                className={"hover:scale-110 hover:text-gray-700 dark:hover:text-white transition-all duration-300 "} />}</span>
                        <span>{props.category == "Flutter" && <SiFlutter
                            className={"hover:scale-110 hover:text-gray-700 dark:hover:text-white transition-all duration-300"} />}</span>
                    </div>
                    <span className="text-sm">{Intl.DateTimeFormat('en-GB').format(props.date)}</span>
                </div>
                <h3>
                    <Link href={`/blog/${props.slug}`}>
                        {props.title}
                    </Link>
                </h3>
                <article className={"prose dark:prose-invert"}>
                    <Markdown>{props.preview}</Markdown>
                </article>
                <div className="flex-grow"></div>
                <div className="flex justify-between items-center prose dark:prose-invert">
                    <div className="flex items-center space-x-4 not-prose">
                        <Image
                            className={"bg-teal-300 rounded-full w-6 h-6"}
                            src={props.author.name.includes("Max") ? MaxWeber : MahtabTadayon}
                            alt={props.author.name}
                            width={256} height={256}
                        />
                        <span> {props.author.name} </span>
                    </div>
                    <Link href="#"
                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}
export default PostPreview;