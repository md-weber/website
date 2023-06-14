export interface PostMetaData {
    title: string;
    slug: string;
    body: string;
    date: string;
    category: {
        id: string,
        contentType: string
    };
    author: string
}