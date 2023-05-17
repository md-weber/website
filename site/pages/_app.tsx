import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/79720f07458d2632a2da54e2/script.js"></Script>
      <Script defer data-domain="flutter-explained.dev" src="https://plausible.io/js/script.js"></Script>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}