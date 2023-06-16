export default function StructuredData({data}: any) {
    return (
        <script
            id={"structured-data"}
            key="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
        />
    );
}