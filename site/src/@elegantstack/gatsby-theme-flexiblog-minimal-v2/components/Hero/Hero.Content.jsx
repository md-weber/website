import React from 'react'
import { Heading } from 'theme-ui'
import Divider from '@components/Divider'

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
      Elevate Your Coding Skills 
      <br />
      With Flutter Explained
    </Heading>
    <Divider space={3} />
    <Heading variant='h3' sx={styles.running}>
        Join us on a learning journey and master Flutter development, guided by our passion, expertise, and shared wisdom.
    </Heading>
  </>
)

export default HeroContent;
