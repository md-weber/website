import {Navbar} from "flowbite-react";
import {FaMoon, FaSun} from "react-icons/fa";
import Link from "next/link";

export default function NavBar(props: { toggleDarkMode: () => void, darkMode: boolean }) {
    return (
        <Navbar fluid rounded>
            <Link href={"/"}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Max Weber
                </span>
            </Link>
            <div className={"flex"}>
                <div onClick={props.toggleDarkMode} className={"rounded-lg inline-flex items-center px-2 md:px-8"}>
                    {props.darkMode ? <FaSun className={"text-gray-300  text-xl"}/> :
                        <FaMoon className={"text-gray-600 text-xl"}/>}
                </div>
                <Navbar.Toggle/>

                <Navbar.Collapse className={""}>
                    <Link href="/"
                          className={"bg-blue-700 text-xl dark:text-white py-1 px-2 md:bg-transparent"}>
                        <p> Home </p>
                    </Link>
                    <Link href="/blog"
                          className={"bg-blue-700 text-xl dark:text-white py-1 px-2 md:bg-transparent"}>
                        <p> Blog </p>
                    </Link>
                    <Link href={"/mentorship"}
                          className={"bg-blue-700 text-xl dark:text-white py-1 px-2 md:bg-transparent"}>
                        <p> Mentorship </p>
                    </Link>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}