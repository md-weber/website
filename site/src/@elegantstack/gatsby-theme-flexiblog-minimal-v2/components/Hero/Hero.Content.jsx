import React from 'react'
import { Heading } from 'theme-ui'
import Divider from '@components/Divider'

// site/src/@elegantstack/gatsby-theme-flexiblog-minimal-v2/components/Hero/Hero.Content.jsx
// site/src/@elegantstack/gatsby-theme-flexiblog-minimal-v2/components/Hero/Hero.Content.jsx

const styles = {
  heading: {
    background: t => `
      linear-gradient(
        45deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.betaDark} 50.5%)
    `,
    color: `beta`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    fontWeight: `bold`
  },
  running: {
    color: `omegaDark`,
    fontWeight: `normal`,
    maxWidth: [`full`, null, `2/3`]
  }
}

const HeroContent = () => (
  <>
    <Divider space={3} />
    <Heading variant='h1' sx={styles.heading}>
      Learn new skills from
      <br />
      Flutter Explained
    </Heading>
    <Divider space={3} />
    <Heading variant='h3' sx={styles.running}>
        We are passionate Flutter Developers who love to share knowledge about Dart and Flutter.
    </Heading>
  </>
)

export default HeroContent;
