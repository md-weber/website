export interface MetaBreadcrumbProps {
    children: any,
    pathnames: string[]
}

const MetaBreadcrumb = (props: MetaBreadcrumbProps) => {
    // Create an array for the breadcrumb JSON-LD
    const itemListElement = props.pathnames.map((value, index) => {
        const linkTo = `/${props.pathnames.slice(0, index + 1).join('/')}`;

        return {
            "@type": "ListItem",
            "position": index + 1,
            "name": capitalize(value),
            "item": `https://example.com${linkTo}`
        }
    });

    // Prepend the home page to the itemListElement array
    itemListElement.unshift({
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://example.com/"
    });

    // Adjust the positions of the rest of the elements
    for (let i = 1; i < itemListElement.length; i++) {
        itemListElement[i].position++;
    }

    return (
        <>

            <script id={"breadcrumbs"} type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": itemListElement
                })
            }}/>

            {props.children}
        </>
    )
}

const capitalize = (s: string) => {
    const parts = s.split('-');
    return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
};

export default MetaBreadcrumb;