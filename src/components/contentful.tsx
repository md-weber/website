import {createClient} from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ?? "",
});

export async function getStaticProps() {
    const res = await client.getEntries({content_type: 'Article'});
    console.log(res);

    return {
        props: {
            posts: res.items
        }
    }
}