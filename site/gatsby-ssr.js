// gatsby-ssr.js
const headComponents = [
    <script key={"cookiehub"} src="https://cookiehub.net/c2/45f3cb02.js"></script>,
    <script key={"local-cookiehub"} src="./cookiehub.js"></script>
]

export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents(headComponents)
}
