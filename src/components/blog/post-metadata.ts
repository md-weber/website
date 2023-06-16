export interface PostMetaData {
    title: string;
    slug: string;
    body: string;
    date: string;
    preview?: any;
    category: string;
    author: { name: string, thumbnailUrl: string }
}