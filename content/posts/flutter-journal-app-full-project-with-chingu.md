---
sys:
  id: unQoP9ijt5u77GzyYgeyP
  contentType: article
  createdAt: '2022-07-03T17:18:36.527Z'
  updatedAt: '2022-07-03T17:18:36.527Z'
title: Flutter Journal App - Full Project with Chingu
slug: flutter-journal-app-full-project-with-chingu
date: '2019-09-02T22:00:00.000Z'
author:
  id: 6xfcZwoP5xpGVTAFhJb76r
  contentType: author
category:
  id: 42tV80rcwniJ304kZ339Y9
  contentType: category
featured: false
private: false
heroImage:
  mimeType: image/png
  url: >-
    //images.ctfassets.net/573xlmlwok2s/4MicprRZ1bwmzg5rybPbl4/62f8e4887e10ba3febba6e2b23002a8f/chingu_thumbnail.png
  title: chingu thumbnail
  description: ''
  width: 1400
  height: 583
  fileSize: 755278
body: >
  I am coming from a Front End development background, and it’s always more
  comfortable for me to break down my applications from top to down. That
  usually means I first start to implement the basics in visualization and then
  come slowly down to the nasty backend world and save my stuff finally on a
  database.


  ## Organization of my project


  This is one of my first experiences with my own real project. Therefore I
  needed to come up with a good structure for my GitHub Repository. I knew I
  will have a backend, aka “server”, and a web “client”. So I created the
  projects inside of the subfolders “server” and “client” (Creative I know).


  Besides of Server and Client you will find also a “scripts” folder. Here I
  always collect powershell scripts that I do not want to always execute myself,
  like setup my development environment or deploy a database.


  The readme.md contains information about my project. It explains how to setup
  my project and other useful things around my project. I found a very good
  template from [Eric Zumwalt](https://medium.com/@zumdewald) and if you are
  interested you can find it
  [here](https://medium.com/chingu/keys-to-a-well-written-readme-55c53d34fe6d).


  The .gitignore file is important for git to know which files I do not want to
  upload. Like for example the .idea folder that takes care of the settings of
  my Integrated Development Environment (IDE).


  ![Initial flutter folder
  structure](//images.ctfassets.net/573xlmlwok2s/1V7dz4vnLZGUKBGK8pbFvL/56c3c4e3f2c9ff9d09fd1b61df921065/voyage-project-structure.webp)


  ## The Flutter Web Client


  Now that the project structure is ready, I started to create the client for my
  project. I followed the guidance of [Ayush
  Shekhar](https://medium.com/flutter-community/flutter-create-and-deploy-a-website-from-scratch-4a026ebd6c).
  He wrote, about how to create a flutter web project in a couple of minutes. So
  let’s go and set up the environment for client and server. The flutter web
  environment was not as comfortable as I expected. I did the following steps.


  Be aware that I assume in that post that you already installed the
  [Flutter](https://flutter.dev/) and Dart SDK. If you have not done that yet
  please take a look at flutter.dev.


  ### Step 1. Activate a global package “webdev”

  To activate the webdev package we have to run following code in the command
  line.


  ```bash

  flutter packages pub global activate webdev

  ```


  ### Step 2. Activate a global package “webdev”


  The second step sounds fairly simple. Unfortunately, it took me a while to
  discover that the Flutter Web App is in Intellij Idea (My IDE for that
  project) in Dart Projects.


  ![New Dart project in
  IntelliJ](//images.ctfassets.net/573xlmlwok2s/aGYAriiSdSC4FboKJIWsF/9025b48012d587020dfb98f3422be51b/new_dart_project.webp)


  But easy as this, I created a “client” folder in my project with a flutter web
  boilerplate. After the creation of the project, it has been three commands to
  run my very first flutter web app.


  ```bash

  pub get

  webdev serve

  ```


  ![Flutter
  Homepage](//images.ctfassets.net/573xlmlwok2s/6fZl8uEdpeTQDpHa6PNoNM/3d9f3d91d41cfac404dd4f9321f4b2b3/flutter-homepage.webp)


  ## Requirement Analysis

  The project structure is clear, and we have done our first steps in a flutter
  app for the web. In this section, I want to split my work into different work
  packages and show you how I proceeded to create the client for the project.
  Chingu was already so helpful and made a basic design for us that I wanted to
  replicate


  ![Chingu challenge tier
  3](//images.ctfassets.net/573xlmlwok2s/fefSrQ4OdfPvFJyWkECbZ/64c3de4fa71c537a9094d38380e5896d/basic-design-tier-3.png)


  Whenever you read or hear about flutter, you will hear the word “Widget”. It
  describes every component in a flutter. So we can say everything we see in
  Flutter is a widget. Basic Text, a Button or even compositions like a ListView
  are widgets. With that in mind, I started to create a mind map of different
  reusable widgets.


  ![Digital Journal
  Areas](//images.ctfassets.net/573xlmlwok2s/7FNtPXpW9cBHmrkSYjfqN8/d72d150a9d24108940581405c5f394dd/digital-journal-areas.webp)


  With that Widget Map in front of me, I started to create the application. In
  the beginning, I started to write everything from top-down in every widget and
  as soon as I found out that something is clearly not part of the main widget I
  started to tear it out and fit it as good as possible to the Widget Map above.
  For example, a Note List Widget will contain multiple notes. A note consists
  of a card with a header, content and footer section and so on.


  ## Workflow in Flutter

  I don’t have a lot of knowledge about Flutter, so I just started to write the
  widgets and found it very satisfying how the compiler and all development
  tools screamed at me as soon as they had a problem with my coding. I come from
  an Angular and Typescript background in which the compiler is not so reliable
  and descriptive.


  Dart and Flutter are entirely different. First, the workflow. You can not just
  change something in the browser. Because other than Angular or React, you are
  not dealing with HTML & CSS in the inspector. You deal with something that
  Flutter calls glass pane. The HTML looks as following.


  ![Digital Journal
  Areas](//images.ctfassets.net/573xlmlwok2s/2U0se0ijUfWtQGwpb1KpTL/f5cf0f6da4f5380b764b10a73a085139/html-looks-different.webp)


  And yes it is still XML, and maybe it even translates somewhere in HTML, but
  at the end, you are not able to use the web inspector anymore. That is very
  interesting.


  On the benefits site, all changes in Styling are now strongly typed. You are
  not able to make any mistakes by writing something wrong, because Flutter will
  not compile it. The documentation is some of the best I’ve ever seen in my
  development live. Let me give you a small example of how to change the style
  of a text element in Flutter.


  ```dart

  Text("Hello World!"),

  ```


  Here you see the “Text” Widget to create a new Widget. We have to pass the
  string that we want to display into the constructor. So if we’re going to
  change the style of that Text, we add to the constructor a style attribute.
  Which is again a TextStyle Widget. The TextStyle itself has several
  parameters, like color and the fontSize.


  ![Colorful text in
  Flutter](//images.ctfassets.net/573xlmlwok2s/T6IVxg9oWbPS5PaS1VEXj/623f5169667d52cd3af408cd7b257ef3/colorful-text.webp)


  ```dart

  child: Text(
    "Hello World!",
    style: TextStyle(
      color: Colors.white,
      fontSize: 42.0,
    ),
  ),

  ```


  If you do something wrong, the development tools will show you immediately.
  The feedback loop is tiny, and you will know if you make mistakes. There is
  also a very good
  [article](https://medium.com/flutter-community/a-deep-dive-into-flutter-textfields-f0e676aaab7a)
  about TextFields from [Deven Joshi](https://medium.com/@dev.n) if you are
  interested in reading more about them.


  ![error-in-ide](//images.ctfassets.net/573xlmlwok2s/43Az2zGrD53w6QB2Bhby3o/b13bc4dc81e5c91ee7c143cbb6287ad6/error-in-ide.webp)


  ## Conclusion

  So after a while of writing new code, I finalized my prototype with absolutely
  no backend support.


  Great! Everything works well and nothing looks like the web, it seems more
  like a mobile application. For example, the navigation in forms with the tab
  key is not working yet. On first glance, it looks pretty weird, and it is, but
  I know that the [Flutter Team](https://flutter.dev/) and the [Flutter
  community](https://medium.com/flutter-community) working hard at that to make
  the web more future proof.


  ![First, cut off my Development in
  Flutter](//images.ctfassets.net/573xlmlwok2s/2j5sLQyFDzCR4XqK4cxo2z/3563654746ed2d7a63c5beb2e8bf76a6/first-web-flutter.webp)


  An exciting thing that I found during the development phase was that when the
  browser got too small. There was a warning massage in chrome that indicates me
  that the text was not readable or that a list did not fit anymore. That means
  I could directly see where the responsive design is not correct. This can be
  very handy in the future if you think about Mobile-first approaches.


  ![The visible cut of Text and widgets
  warnings](//images.ctfassets.net/573xlmlwok2s/7aPpzHYQMEbcsmHUXHresG/7e6fa842fe4d2aa9fd41d722f88bfce7/responsive-edges.webp)


  So this is it, we managed the beginning of my Flutter Digital Journal
  together. Now with the basics in place, we can begin with coding my way to the
  end of the challenge. If you are interested, please feel free to check out my
  [repository](https://github.com/md-weber/voyage-prework-tier3-journal-app) or
  the current release of the Flutter Digital Journal.


  Thanks for reading and enjoy your Flutter Journey!
keywords:
  - Flutter
  - Dart
  - Web
tags:
  - Web
  - Flutter
---
