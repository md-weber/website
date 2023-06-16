export interface PostMetaData {
    title: string;
    slug: string;
    body: string;
    date: Date;
    preview?: any;
    category: string;
    author: { name: string, thumbnailUrl: string }
}