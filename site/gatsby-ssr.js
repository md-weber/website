// gatsby-ssr.js
const headComponents = [
    <title key={"header-1"}>Home | Flutter Explained</title>,
    <meta key={"header-2"} name="title" content="Home | Flutter Explained"></meta>,
    <meta key={"header-3"} name="description"
          content="The blog for the YouTube Channel of Flutter Explained. It covers mainly Flutter and Dart development topics."></meta>,
    <meta key={"header-4"} property="og:type" content="website"></meta>,
    <meta key={"header-5"} property="og:url" content="https://www.flutter-explained.dev/"></meta>,
    <meta key={"header-6"} property="og:title" content="Home | Flutter Explained"></meta>,
    <meta key={"header-7"} property="og:description"
          content="The blog for the YouTube Channel of Flutter Explained. It covers mainly Flutter and Dart development topics."></meta>,
    <meta key={"header-8"} property="og:image" content="website_meta.png"></meta>,
    <meta key={"header-9"} property="twitter:card" content="summary_large_image"></meta>,
    <meta key={"header-10"} property="twitter:url" content="https://www.flutter-explained.dev/"></meta>,
    <meta key={"header-11"} property="twitter:title" content="Home | Flutter Explained"></meta>,
    <meta key={"header-12"} property="twitter:description"
          content="The blog for the YouTube Channel of Flutter Explained. It covers mainly Flutter and Dart development topics."></meta>,
    <meta key={"header-13"} property="twitter:image" content="website_meta.png"></meta>,
]

export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents(headComponents)
}
