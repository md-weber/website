'use client';

import {Footer} from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
    return (
        <Footer container className={"mx-auto rounded-none pt-16"}>
            <div className="w-full justify-center">
                <div className="w-full flex justify-center md:grid-cols-2">
                    <div className="grid gap-16 mt-2 grid-cols-2 md:grid-cols-3 ">
                        <div>
                            <Footer.Title title="about"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Flowbite
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full flex items-center justify-between">
                    <Footer.Copyright by="Max Weber" href="#" year={new Date().getFullYear()}/>
                    <div className="flex space-x-6 mt-0 sm:justify-center md:mt-4">
                        <Footer.Icon href="#" icon={BsFacebook}/>
                        <Footer.Icon href="#" icon={BsInstagram}/>
                        <Footer.Icon href="#" icon={BsTwitter}/>
                        <Footer.Icon href="#" icon={BsGithub}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}


