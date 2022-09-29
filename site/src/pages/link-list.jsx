import React from 'react'
import {Layout, Main, Stack} from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import {BsChatSquareText, BsLink} from 'react-icons/bs';
import {FaCodeBranch, FaLinkedin, FaPatreon, FaTwitch, FaTwitterSquare, FaYoutubeSquare} from "react-icons/fa";
import './link-list.css'

const getCardBackgroundColor = (icon) => {
    switch (icon) {
        case "YouTube":
            return "#e07768";
        case "Twitter":
            return "#6eadd4";
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
        default:
            return "#000"
    }
}

const getIcon = (icon) => {
    switch (icon) {
        case "YouTube":
            return <FaYoutubeSquare className={"fa i"}/>
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
        title: "Twitter",
        url: "https://twitter.com/flutter_exp",
        subTitle: "Follow me on Twitter if you are interested in Flutter & Dart Updates",
        icon: "Twitter"
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
        url: "https://codeberg.org/org/Flutter-Explained",
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
        title: "Matrix / Instant Messanger",
        url: "https://matrix.to/#/#flutter-explained:tchncs.de",
        subTitle: "You like Discord but with Privacy join us on Matrix (FluffyChat)",
        icon: "Matrix"
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
