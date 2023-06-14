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
            <div className={"flex flex-grow justify-end"}>
                <div onClick={props.toggleDarkMode}
                     className={"rounded-lg inline-flex items-center px-2 md:px-8 cursor-pointer"}>
                    {props.darkMode ? <FaSun className={"text-gray-300  text-xl"}/> :
                        <FaMoon className={"text-gray-600 text-xl"}/>}
                </div>
                <Navbar.Toggle/>


            </div>
            <Navbar.Collapse className={"bg-transparent"}>
                <ul className="flex flex-col font-medium lg:flex-row lg:mt-0">
                    <li className={"border-b-gray-700 border-b-2 md:border-b-0"}>
                        <Link href="/"
                              className="block px-6 py-2 hover:text-white rounded  lg:bg-transparent lg:text-primary-700 dark:text-gray-400 hover:bg-gray-700 dark:hover:text-white transition-all duration-200"
                              aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className={"border-b-gray-700 border-b-2 md:border-b-0"}>
                        <Link href="/blog"
                              className="block px-6 py-2 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-gray-400 hover:bg-gray-700 dark:hover:text-white transition-all duration-200"
                              aria-current="page">Blog</Link>
                    </li>
                    <li>
                        <Link href="/mentorship"
                              className="block px-6 py-2 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-gray-400 hover:bg-gray-700 dark:hover:text-white transition-all duration-200"
                              aria-current="page">Mentorship</Link>
                    </li>
                </ul>
            </Navbar.Collapse>

        </Navbar>
    )
}