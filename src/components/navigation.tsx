import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";

export default function NavBar(props: { toggleDarkMode: () => void, darkMode: boolean }) {
    return (
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>Flutter Explained</h1>
            <ul className='flex items-center'>
                <li>{props.darkMode ?
                    <BsFillSunFill className={"cursor-pointer text-xl text-yellow-300"} onClick={props.toggleDarkMode}/> :
                    <BsFillMoonStarsFill className='cursor-pointer text-xl ' onClick={props.toggleDarkMode}/>}
                </li>
                <li>
                    <a href="#"
                       className='bg-gradient-to-tl from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Mentorship</a>
                </li>
            </ul>
        </nav>
    )
}