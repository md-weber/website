// app/providers.jsx

'use client'

import {ThemeProvider} from 'next-themes'

const Providers = (props: { children: any }) => {
    return <ThemeProvider attribute={"class"}>{props.children}</ThemeProvider>
}

export default Providers;