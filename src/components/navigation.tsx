import {Button, Navbar} from "flowbite-react";
import {FaMoon, FaSun} from "react-icons/fa";

export default function NavBar(props: { toggleDarkMode: () => void, darkMode: boolean }) {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Max Weber
                </span>
            </Navbar.Brand>
            <Button outline onClick={props.toggleDarkMode}>
                {props.darkMode ? <FaSun/> : <FaMoon/>}
            </Button>
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