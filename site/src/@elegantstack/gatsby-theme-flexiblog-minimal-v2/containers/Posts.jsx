import React from 'react'
import { Layout, Stack, Hero, Main, PreFooter } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Pagination from '@components/Pagination'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import Seo from '@widgets/Seo'
import HeroComponent from '../../../../../packages/themes/gatsby-theme-flexiblog-minimal-v2/src/components/Hero/Hero'
import { Heading } from 'theme-ui'

const styles = {
  heading: {
    span: {
      color: `omegaDark`
    }
  }
}

const Posts = ({ data: { paginatedPosts = {}, posts }, ...props }) => {
  const { pageContext: { services = {}, basePath } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Hero>
        <HeroComponent {...props} />
      </Hero>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Stack>
        <Main>
          <Heading variant='h1' sx={styles.heading}>Our Services</Heading>
          <p>Welcome to Flutter Explained, where we offer a range of services to help you and your team master Flutter development. From training for companies and mentorship programs to public speaking and creating educational content on YouTube, we are here to guide you every step of the way on your Flutter journey.</p>

          <Heading variant='h2' sx={styles.heading}>Professional Training</Heading>

          <p>We offer high-quality, bespoke Flutter training for companies and teams. Our professional training programs are tailored to your specific needs, ensuring that you get the most out of every training session.</p>

          <Heading variant='h2' sx={styles.heading}>Mentorship Program</Heading>

          <p>Join our mentorship program for one-on-one guidance and support. Whether you're new to Flutter or looking to take your skills to the next level, we're here to assist.</p>

          <Heading variant='h2' sx={styles.heading}>Public Speaking</Heading>

          <p>Looking for an experienced, engaging speaker for your event? We have extensive experience speaking at various events and conferences, and we're available for both in-person and virtual engagements.</p>

          <Heading variant='h2' sx={styles.heading}>YouTube Content Creator</Heading>

          <p>Don't miss our educational content on YouTube. We regularly release videos covering a wide range of topics within Flutter development. Subscribe to our channel for regular updates and deepen your knowledge at your own pace.</p>
        </Main>
      </Stack>
      <Divider />
      <Stack>
        <Main sx={{ zIndex: 1 }}>
          <CardList
            variant={['horizontal']}
            title='Our Blog'
            nodes={paginatedPosts.nodes}
            columns={[1, 2]}
            omitMedia
          />
        </Main>
      </Stack>
      <Divider />
      <PreFooter>
        <Pagination {...paginatedPosts.pageInfo} basePath={basePath} />
      </PreFooter>
      <Divider space={5} />
      <Stack>
        <Main sx={{ zIndex: 1 }}>
          {services.mailchimp && <NewsletterExpanded simple />}
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
