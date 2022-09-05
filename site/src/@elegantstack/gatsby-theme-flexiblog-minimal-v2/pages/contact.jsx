import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

const Contact = (props) => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Let us create something amazing together"
          subheader='We want to change the way you see mobile development with Flutter. If you want to help us or you could use our support, feel free to drop us a message.'
        />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)

export default Contact;