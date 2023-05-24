import React from 'react'
import {Layout, Main, Stack} from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import {BsChatSquareText, BsLink, BsPeople} from 'react-icons/bs';
import {
    FaBitcoin,
    FaCodeBranch,
    FaLinkedin,
    FaLock,
    FaMastodon,
    FaPatreon,
    FaTwitch,
    FaTwitterSquare,
    FaYoutubeSquare
} from "react-icons/fa";
import './link-list.css'

const getCardBackgroundColor = (icon) => {
    switch (icon) {
        case "YouTube":
            return "#e07768";
        case "Twitter":
        case "Mastodon":
            return "#6eadd4";
        case "Onlyfans":
            return "#01acee";
        case "Community":
        case "LinkedIn":
            return "#0a66c2";
        case "Twitch":
            return "#60448d";
        case "Codeberg":
            return "#000000";
        case "Patreon":
            return "#ff424d";
        case "Matrix":
            return "#4c3e92";
        case "Bitcoin":
            return "#e0c868"
        default:
            return "#000"
    }
}

const getIcon = (icon) => {
    switch (icon) {
        case "YouTube":
            return <FaYoutubeSquare className={"fa i"}/>
        case "Community":
            return <BsPeople className={"fa i"}/>
        case "Twitter":
            return <FaTwitterSquare className={"fa i"}/>
        case "LinkedIn":
            return <FaLinkedin className={"fa i"}/>;
        case "Twitch":
            return <FaTwitch className={"fa i"}/>;
        case "Codeberg":
            return <FaCodeBranch className={"fa i"}/>;
        case "Patreon":
            return <FaPatreon className={"fa i"}/>;
        case "Matrix":
            return <BsChatSquareText className={"fa i"}/>;
        case "Onlyfans":
            return <FaLock className={"fa i"}/>;
        case "Mastodon":
            return <FaMastodon className={"fa i"}/>;
        case "Bitcoin":
            return <FaBitcoin className={"fa i"}/>
        default:
            return <BsLink className={"fa i"}/>
    }
}

const socialMediaPresence = [
    {
        title: "YouTube",
        url: "https://youtube.com/c/flutterexplained",
        subTitle: "Subscribe to our Channel if you are interested in Dart and Flutter Content",
        icon: "YouTube",
    },
    {
        title: "Flutter Explained Community",
        url: "https://flutterexplained.podia.com/flutter-explained-community",
        subTitle: "The new community page of Flutter Explained and my future courses will be here.",
        icon: "Community",
    },
    {
        title: "Mastodon",
        url: "https://fosstodon.org/@flutterexp",
        subTitle: "Follow me on Fosstodon if you are interested in Flutter & Dart Updates",
        icon: "Mastodon"
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/max-weber-9889a3ba/",
        subTitle: "On LinkedIn you will find my professional CV",
        icon: "LinkedIn"
    },
    {
        title: "Twitch",
        url: "https://www.twitch.tv/maxexplaines",
        subTitle: "Follow me on Twitch if you are interested in a live coding experience!",
        icon: "Twitch"
    },
    {
        title: "Codeberg",
        url: "https://codeberg.org/Flutter-Explained",
        subTitle: "If you are searching for code examples search no more",
        icon: "Codeberg"
    },
    {
        title: "Patreon",
        url: "https://www.patreon.com/flutterexp",
        subTitle: "You like our work and want to support us, we would love your support on Patreon",
        icon: "Patreon"
    },
    {
        title: "Bitcoin Donation",
        url: "https://bit.ly/donations_btc",
        subTitle: "If you wish to support via LND or Bitcoin this is for you!",
        icon: "Bitcoin"
    },
    {
        title: "Matrix / Instant Messanger",
        url: "https://matrix.to/#/#flutter-explained:tchncs.de",
        subTitle: "You like Discord but with Privacy join us on Matrix (FluffyChat)",
        icon: "Matrix"
    },
    {
        title: "Onlyfans",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1",
        subTitle: "Today everyone has that",
        icon: "Onlyfans"
    },

]

const LinkList = (props) => (
    <Layout {...props}>
        <Seo title='LinkList'/>
        <Divider/>
        <Stack>
            <Main>
                <PageTitle header="Link list of Flutter Explained"/>

                <div className="container">
                    {
                        socialMediaPresence.map((social) => {
                            return (
                                <div className={"link-list-card"}>
                                    <a href={social.url}
                                       rel="noreferrer"
                                       target="_blank">
                                        <div className={"link-row"}>
                                            <div style={{color: getCardBackgroundColor(social.icon)}}
                                                 className={"icon"}>
                                                {getIcon(social.icon)}
                                            </div>
                                            <div className={"link-text"}>
                                                <h4>{social.title}</h4>
                                                <p>{social.subTitle}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </Main>
        </Stack>

    </Layout>
)

export default LinkList;
