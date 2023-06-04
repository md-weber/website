import {useRouter} from "next/navigation";
import {Navbar} from "flowbite-react";

export default function NavBar(props: { toggleDarkMode: () => void, darkMode: boolean }) {
    const router = useRouter();
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Max Weber
                </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link active href="/">
                    <p> Home </p>
                </Navbar.Link>
                <Navbar.Link active href="/mentorship">
                    <p> Mentorship </p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}