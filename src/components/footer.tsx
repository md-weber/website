'use client';

import {Footer} from 'flowbite-react';
import {socialMediaLinks} from "@/components/social-media-links";
import React from "react";

export default function FooterWithSocialMediaIcons() {
    return (
        <Footer container className={"mx-auto rounded-none pt-16 dark:bg-gray-900"}>
            <div className="w-full justify-center">
                <div className="w-full flex justify-center md:grid-cols-2">
                    <div className="grid gap-16 mt-2 grid-cols-2 md:grid-cols-4 ">
                        <div>
                            <Footer.Title title="about"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Max Weber
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col>
                                {
                                    socialMediaLinks.slice(0, 4).map((link) => (
                                        <Footer.Link href={link.url} key={link.social}>
                                            {link.social.at(0)!.toUpperCase() + link.social.slice(1)}
                                        </Footer.Link>
                                    ))
                                }
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col>
                                {
                                    socialMediaLinks.slice(4).map((link) => (
                                        <Footer.Link href={link.url} key={link.social}>
                                            {link.social.at(0)!.toUpperCase() + link.social.slice(1)}
                                        </Footer.Link>
                                    ))
                                }
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal"/>
                            <Footer.LinkGroup col>
                                <Footer.Link href="/privacy-policy">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="/imprint">
                                    Imprint
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full flex items-center justify-between">
                    <Footer.Copyright by="Max Weber" href="/" year={new Date().getFullYear()}/>
                    <div className="flex space-x-2 justify-center md:space-x-4">
                        {socialMediaLinks.map((link) => (
                            <Footer.Icon href={link.url} icon={link.icon} key={link.social}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </Footer>
    )
}


