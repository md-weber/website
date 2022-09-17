import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import { BsYoutube, BsTwitch, BsPiggyBank, BsCodeSquare, BsChatText, BsTwitter } from 'react-icons/bs';

const LinkList = (props) => (
  <Layout {...props}>
    <Seo title='LinkList' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Link list of Flutter Explained"
          subheader='Welcome to Flutter Explained your source for Flutter and Dart content, checkout the following links and welcome to the Flutter Community!'
        />
      </Main>
    </Stack>
    <ul>
      <li>
        <a href="https://www.youtube.com/c/FlutterExplained">
          <BsYoutube /> Youtube
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/maxexplaines">
          <BsTwitch /> Twitch
        </a>  
      </li>
      <li>
        <a href="https://www.youtube.com/c/FlutterExplained">
          <BsTwitter /> Twitter
        </a>
      </li>
      <li>
        <a href="https://www.patreon.com/flutterexp">
         <BsPiggyBank /> Patreon
        </a>
      </li>
      <li>
        <a href="https://codeberg.org/Flutter-Explained">
         <BsCodeSquare /> Codeberg
        </a>
      </li>
      <li>
        <a href="https://matrix.to/#/#flutter-explained:tchncs.de">
          <BsChatText /> Matrix
        </a>
      </li>
    </ul>
  </Layout>
)

export default LinkList;
