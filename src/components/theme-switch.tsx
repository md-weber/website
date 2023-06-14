'use client'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {BsMoon, BsMoonFill, BsSun, BsSunFill} from "react-icons/bs";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button className={"cursor-pointer"} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme == "light" ?
                <BsSunFill/> :
                <BsMoonFill/>}
        </button>
    )
}

export default ThemeSwitch