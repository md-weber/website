require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false
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
        name: 'Codeberg',
        url: 'https://codeberg.org/Flutter-Explained'
      },
      {
        name: 'Matrix',
        url: 'https://matrix.to/#/#flutter-explained:tchncs.de'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/c/FlutterExplained'
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
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
