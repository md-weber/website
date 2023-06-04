import {FaTwitter, FaMastodon, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa';
import React from "react";
import Link from "next/link";
import styles from './social-media.module.css'

export const socialMediaLinks = {
    "twitter": "https://twitter.com/flutter_exp",
    "mastodon": "https://fosstodon.org/@flutterexp",
    "youtube": "https://www.youtube.com/@flutterexplained",
    "linkedin": "https://www.linkedin.com/in/max-weber-9889a3ba/",
    "instagram": "https://www.instagram.com/flutterexplained/"
};

export default function SocialMediaIcons() {
    return (
        <div
            className={`${styles.socialIcons} flex justify-between mx-auto pt-5 text-3xl text-gray-700 dark:text-gray-200 w-9/12 md:max-w-screen-sm`}>
            <Link href={socialMediaLinks["twitter"]} className={styles.twitter}><FaTwitter></FaTwitter></Link>
            <Link href={socialMediaLinks["mastodon"]} className={styles.mastodon}><FaMastodon></FaMastodon></Link>
            <Link href={socialMediaLinks["youtube"]} className={styles.youtube}><FaYoutube></FaYoutube></Link>
            <Link href={socialMediaLinks["linkedin"]} className={styles.linkedin}><FaLinkedin></FaLinkedin></Link>
            <Link href={socialMediaLinks["instagram"]} className={styles.instagram}><FaInstagram></FaInstagram></Link>
        </div>
    );
}
