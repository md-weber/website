import {
    FaTwitter,
    FaMastodon,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaDiscord,
    FaGithub,
} from 'react-icons/fa';
import React from "react";
import Link from "next/link";
import styles from './social-media.module.css'

export const socialMediaLinks = [
    {"social": "github", "url": "https://github.com/md-weber", "style": styles.github, "icon": FaGithub},
    {"social": "mastodon", "url": "https://fosstodon.org/@flutterexp", "style": styles.mastodon, "icon": FaMastodon},
    {
        "social": "youtube",
        "url": "https://www.youtube.com/@flutterexplained",
        "style": styles.youtube,
        "icon": FaYoutube
    },
    {"social": "twitter", "url": "https://twitter.com/flutter_exp", "style": styles.twitter, "icon": FaTwitter},
    {
        "social": "linkedin",
        "url": "https://www.linkedin.com/in/max-weber-9889a3ba/",
        "style": styles.linkedin,
        "icon": FaLinkedin
    },
    {
        "social": "instagram",
        "url": "https://www.instagram.com/flutterexplained/",
        "style": styles.instagram,
        "icon": FaInstagram
    },
    {"social": "discord", "url": "https://discord.gg/TRSY4tGHpd", "style": styles.discord, "icon": FaDiscord},
]

export default function SocialMediaIcons() {
    return (
        <div
            className={`${styles.socialIcons} md:w-3/6 flex justify-between mx-auto pt-8 text-3xl text-gray-700 dark:text-gray-200  md:max-w-screen-sm`}>
            {
                socialMediaLinks.map((link) => (
                    <Link href={link.url} className={link.style} key={link.social}>{<link.icon/>}</Link>
                ))
            }
        </div>
    );
}
