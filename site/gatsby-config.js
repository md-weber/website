require('dotenv').config()
const fontFile = require('./src/@elegantstack/flow-ui-theme/theme/typography-fonts.json')

module.exports = {
    flags: {
        DEV_SSR: false,
        FAST_DEV: true,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: './content/assets/favicon.png',
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: '@elegantstack/gatsby-theme-flexiblog-minimal-v2',
            options: {
                fonts: fontFile.fonts,
                sources: {
                    contentful: true,
                    local: false
                }
            },
            // Add theme options here. Check documentation for available options.
            siteUrl: process.env.URL || process.env.VERCEL_URL
        }
    ],
    // Customize your site metadata:
    siteMetadata: {
        //General Site Metadata
        title: 'Flutter Explained',
        name: 'FlutterExplained',
        description: 'Passionate Flutter Engineers',
        address: 'Karlsruhe, Germany',
        email: 'flutterexp@gmail.com',
        phone: '+49 163 6270680',

        //Site Social Media Links
        social: [
            {
                name: 'YouTube',
                url: 'https://www.youtube.com/c/FlutterExplained'
            },
            {
                name: "Twitter",
                url: "https://twitter.com/flutter_exp"
            },
            {
                name: 'Codeberg',
                url: 'https://codeberg.org/Flutter-Explained'
            },
            {
                name: 'Matrix',
                url: 'https://matrix.to/#/#flutter-explained:tchncs.de'
            }
        ],

        //Header Menu Items
        headerMenu: [
            {
                name: 'Home',
                slug: '/'
            },
            {
                name: 'Contact',
                slug: '/contact'
            }
        ],

        //Footer Menu Items (2 Sets)
        footerMenu: [
            {
                title: 'Quick Links',
                items: [
                    {
                        name: 'Advertise with us',
                        slug: '/contact'
                    },
                    {
                        name: 'About Us',
                        slug: '/about'
                    },
                    {
                        name: 'Contact Us',
                        slug: '/contact'
                    }
                ]
            },
            {
                title: 'Legal Stuff',
                items: [
                    {
                        name: 'Privacy Policy',
                        slug: '/privacy-policy'
                    },
                    {
                        name: 'Impressum',
                        slug: '/impressum'
                    },
                ]
            },]
    }
}
