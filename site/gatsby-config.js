require('dotenv').config()

module.exports = {
    flags: {
        DEV_SSR: false,
        FAST_DEV: true,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-8K5B8SG358", // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
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
            },
            {
                resolve: `gatsby-plugin-google-analytics-gdpr`,
                options: {
                    // The property ID; the tracking code won't be generated without it.
                    trackingId: "G-HKQR5MMP8V",
                    // Optional parameter (default false) - Enable analytics in development mode.
                    enableDevelopment: false, // default false
                    // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
                    anonymizeIP: true,
                    // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
                    autoStartWithCookiesEnabled: false,
                    // Optional parameter - Configuration for react-ga and google analytics
                    reactGaOptions: {
                        debug: true,
                        gaOptions: {
                            sampleRate: 10
                        }
                    }
                },
            },
            {
                resolve: `gatsby-plugin-cookiehub-banner`,
                options: {
                    // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
                    cookieHubId: "45f3cb02",
                    cookieHubV2Api: true,
                    categories: [
                        {
                            categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
                            cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
                        },
                    ]
                }
            }
        ]
    }
}
