import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar() {
    return (
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Flutter Explained</h1>
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className='cursor-pointer text-xl' /></li>
                <li>
                    <a href="#" className='bg-gradient-to-tl from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Mentorship</a>
                </li>
            </ul>
        </nav>
    )
}