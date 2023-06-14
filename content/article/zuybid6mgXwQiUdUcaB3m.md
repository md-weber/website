---
sys:
  id: zuybid6mgXwQiUdUcaB3m
  contentType: article
  createdAt: '2022-07-03T17:18:35.791Z'
  updatedAt: '2022-07-03T17:18:35.791Z'
title: Flutter Project - Scrum Poker App
slug: flutter-project-scrum-poker-app
date: '2019-10-12T22:00:00.000Z'
author:
  id: 6xfcZwoP5xpGVTAFhJb76r
  contentType: author
category:
  id: 42tV80rcwniJ304kZ339Y9
  contentType: category
featured: false
private: false
heroImage:
  mimeType: image/webp
  url: >-
    //images.ctfassets.net/573xlmlwok2s/3o1Dd4ygr8HdxotIJ7pkCA/a256ac570f3ac0a306c65786d6d8ea5c/flutter-scrum-card-app.webp
  title: Flutter Scrum Card Project - Thumbnail
  description: ''
  width: 1000
  height: 522
  fileSize: 153540
body: >
  First, I want to start by creating a clear picture of what we want to achieve.
  I work currently on a Scrum Team, we always have to carry around our cards for
  sprint poker. These cards are old, dirty and very often used from a lot of
  teams and so I decided to change that with an app, once and for all.


  ## Scrum Poker App

  If you have never worked in a Scrum Team before, you maybe never heard the
  term Scrum Poker. To explain the whole idea, would probably be too much for
  that story, but if you are interested [Ravindra
  Prasad](https://medium.com/@ravindraprasad) wrote an excellent
  [article](https://ravindraelicherla.medium.com/story-point-estimation-and-planning-poker-3a0938a6b5ca)
  about that topic.


  > It is like real poker, but everyone has the same cards. - Max Weber


  <div style={{
      width: "50%",
      height: 0,
      paddingBottom: "50%",
      position: "relative",
      margin: "0 auto",
      boxShadow: "3px 3px 11px 0px rgba(0,0,0,0.75)"
  }}>
      <iframe src="https://giphy.com/embed/httS0Xzi9ZMQ0" width="100%" height="100%" style={{position: "absolute"}}
              frameBorder="0" className="giphy-embed" allowFullScreen/>
  </div>


  ## Visual guidance


  For me, it is always helpful in my projects to have visual guidance like a
  prototype. This prototype can be a drawing on a paper or a fully-fledged
  prototype. For this article, I created a quick prototype in Adobe XD just to
  show you how it can look like and to give myself visual support.


  ![Scrum Poker App Solution -
  Gif](//images.ctfassets.net/573xlmlwok2s/7m9ey3PV3Hk8hTf0LhQdcU/994754b1191e4ec4b5dbf93c0aec5e65/scrum-poker-app.gif)


  With that, we have a prototype and now we know what we want to create. Now we
  are ready for development. First of all, we have to create a new project with
  Flutter. On the [Flutter Website](https://flutter.dev/), there are more
  information on how to set up your environment. I will use for this story
  [Android Studio](https://developer.android.com/studio) with the Flutter and
  Dart plugin.


  ## Restructure our boilerplate

  After the setup of the flutter project, let us start with removing all the
  comments that we do not need. I separate the Home Page from the main file so
  that we have a better feeling for our application. With that, we bring a bit
  more order in the project boilerplate. In our main file, this is what should
  remain.


  ```dart

  import 'package:flutter/material.dart';

  import 'package:flutter_scrum_cards/pages/myHomePage.dart';


  void main() => runApp(MyApp());


  class MyApp extends StatelessWidget {
    // This widget is the root of your application.
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyHomePage(title: 'Flutter Demo Home Page'),
      );
    }
  }

  ```


  In the “myHomePage.dart” you will find the Stateful “MyHomePage” Widget that
  is initialized with the flutter project.


  ![My Homepage Dart
  File](//images.ctfassets.net/573xlmlwok2s/1nbgxrmhQXaOMC20TCJhv8/ea96fdd1bd5a916296e5ed9c8626e23c/myHomepage.webp)


  And the following image represents the folder structure:

  ![Folder structure of our Flutter
  project](//images.ctfassets.net/573xlmlwok2s/4vPoY6MgAiJYjnGULz0BtB/31bce78168ff06f136858650a639323c/folder-structure.png)


  ## Our HomePage

  For our first shot, we want to use the existing Scaffold of the HomePage. This
  contains our scrum cards and a Flutter GridView. The GridView gives us the
  option to align multiple items in a grid. The count constructor of the
  GridView provides us, with the out-of-the-box functionality, to create our
  Grid with Cards.


  ![Homepage Second
  Step](//images.ctfassets.net/573xlmlwok2s/7HUygyjWhEYcmo00lUFHxk/6a2a3f7b9ab31c78fbc487f14b586051/homepage-2.webp)


  First, we initialize a variable “Fibonacci” so that we can contain the numbers
  in an array. If you take a closer look into the children of the count
  constructor of the GridView you can see the “for Loop”. Is this not great? We
  can loop inside the children array to map our Fibonacci array to placeholders.


  ![Placeholders for our scrum card
  app](//images.ctfassets.net/573xlmlwok2s/LfetmbkgU8Ghabgpot6m7/42e9ed106fd7955cb1f441b2085d4141/placeholder-scrum-card.webp)


  Great, the Grid looks already very promising. Did you see how the Placeholder
  widget is handy in this part? With that in place, we do not have to create
  anything for the card just yet. However, the result is already evident. The
  Placeholders help us to structure already our app without actually
  implementing something.


  ## The Cards

  Now that we have the basic structure in place, we have to think about how we
  want to display our Cards. Thankfully Flutter provides already something for
  us. The Card Widget will help us to create excellent visualization of the
  cards with Text inserted. Because the cards will not change, we can create a
  stateless widget for it with an icon or a number. For now, it will live in the
  “MyHomePage”.


  ![ScrumCard Build
  Function](//images.ctfassets.net/573xlmlwok2s/7FZEZgtKFJNsRoVIHY2UGa/33460511252e2aaedee9745cb8e77db3/1-8.png)


  ![ScrumCard Grid
  View](//images.ctfassets.net/573xlmlwok2s/1U7MQN60ePK51pdbExeDmR/81130a5eeec0b6fedaeb3a9bbe5e17b2/1-9.webp)


  ![ScrumCard
  App](//images.ctfassets.net/573xlmlwok2s/79zQ6KTwjcTvy7AtlBSY9A/2cc43399222dfbbb4d644d9b39588d11/2-1.webp)


  ## Gestures

  Now it is time to control our behaviour of the app. When we tap a card, it
  should remove the widgets from the tree and replace it with a single card
  widget. That, however, changes the state of the “MyHomePage” Widget.


  To achieve that tap behaviour, we first have to surround our Card element with
  a GestureController. After that, we have to specify the onTap event inside of
  the card.


  ![ScrumCard
  Widget](//images.ctfassets.net/573xlmlwok2s/685qKt2UobemWnt81DYm3J/a7f6ba7d0e0ebe147cb8054e9a9c7320/1-10.png)


  This will now print every click on a card in a separate line in the console.


  ![ScrumCard Visible Press
  Events](//images.ctfassets.net/573xlmlwok2s/2WGcmHgqCW1yy8gtryUu0h/f8b1ce398d9530bb0fbd00fd7eb8f18c/1-11.webp)


  ## Downtime

  Alright, we made it very far already. So let’s take a break and recap shortly,
  what we created already.


  a Design for our Scrum Card App

  a HomePage

  a ScrumCard widget

  Gestures and tapping event

  The next thing that we need to do is to change the state of our app, after a
  tap. Whenever a card is tapped we want to replace the Body from the HomePage
  with a Big ScrumCard Widget.


  Now comes the tough part so. Therefore make yourself ready, take a deep breath
  and then let’s get into it!


  <div style={{
      width: "50%",
      height: 0,
      paddingBottom: "50%",
      position: "relative",
      margin: "0 auto",
      boxShadow: "3px 3px 11px 0px rgba(0,0,0,0.75)"
  }}>
      <iframe src="https://giphy.com/embed/l0K4jwyp6FZa9phyU" width="100%" height="100%" style={{position: "absolute"}}
              frameBorder="0" className="giphy-embed" allowFullScreen/>
  </div>


  [via GIPHY](https://giphy.com/embed/l0K4jwyp6FZa9phyU)


  ## State Management

  There are two different kinds of Widgets in Flutter.


  Stateless Widgets

  Stateful Widgets

  The stateless widget is a widget that will always be shown according to its
  initial values. During its lifetime the initial values can not change. The
  stateful widget, on the other hand, contains a real state and if you change
  the state the widget will be re-rendered. If you want to read more about the
  different types of widgets feel free to take a look at the
  [article](https://proandroiddev.com/flutter-a-hitchhiker-guide-to-stateless-and-stateful-widgets-cc9f9295253b)
  by [Deepak K.](https://medium.com/@CodeSports)


  Now we have to first time handle the state of our widgets. When we click the
  button the state of the “Grid Widget” should change to a big “Card Widget”.
  This tells us that we have at least two different states in our app. To keep
  track of these states we have to change our current “Stateless” Widget to a
  “Stateful” Widget. The easiest way is to click on Stateless Widget and use the
  IDE function to change the Stateless Widget to a Stateful Widget.


  ![Switch in IntelliJ to a Stateful
  Widget](//images.ctfassets.net/573xlmlwok2s/2trFfAVhGNXSV8DSksJB3o/fa3445bf62b4283081eadc7b4437e216/1-12.webp)


  Because the new Widget is now stateful, we can change its value and the
  “build” method can react to these different states.


  ![States are not
  contained](//images.ctfassets.net/573xlmlwok2s/5hDpu8XltCnqxQM8lrku5w/e2fdd588f041e0443c0589b5795c9183/1-13.webp)


  We want to track the information of the Icon that we want to show or the Text
  that is visible on the card so we need that to a state. I call that variables
  “singleCardText” and “singleCardIcon”. Additionally, I want to have a boolean
  that knows if I have to show the Main Page with all Cards or just the Single
  Big Card.


  Be careful at that point, I made here a big mistake and put all these
  variables in the build method. The build method gets called multiple times and
  whenever it gets called it overwrites the values again. Of course, that sounds
  trivial but cost me 1 hour of my lifetime.


  ## The Exchange

  Now we want to swap the widgets based on the “isHomePage” value. Therefore, we
  can use one of Flutter skills. We surround our `GridView.count` constructor
  with a ternary operator. That checks our isHomePage and add the respective
  Widget to the Container.


  ![Ternery
  Operators](//images.ctfassets.net/573xlmlwok2s/19s0osEkIdJkWjgH1VaPKF/7dabb272dba60faa88a7bf71040ec6d2/1-14-1.webp)


  If you get confused by the “?” and the “:” in the code I can recommend you to
  read an article about [“Ternary
  Operator”](https://medium.com/flutter-community/simple-and-bug-free-code-with-dart-operators-2e81211cecfe)
  from [Deven Joshi](https://medium.com/@dev.n). With that in place, we have the
  opportunity to change the “isHomePage” to false and it would show us only the
  Padding (and whatever is there inside) or we keep it on true, and it will show
  us the GridView. Therefore we need the “setState” method. It will allow us
  very easy to change the current state of the widget.


  ![SwitchToCard method and
  State](//images.ctfassets.net/573xlmlwok2s/3E15XbfE7J5CzDnOL8Go8/b7fbf509ea9f3e4a9a0936f8aefa9306/1-15.webp)


  Great so far. Now instead of the tap where we just print something in the
  console, we want to execute the “switchToCard” method. But how? The method has
  to live in the _HomePageState and the ScrumCard has no access to that state?
  Alright then, let me explain it to you because there is a fairly simple
  solution to that problem. We just pass our function into the ScrumCard Widget.
  And whenever the user taps now on the card we call that method and “notify”
  our parent widget.


  ![Showcase of the notifyParent
  method](//images.ctfassets.net/573xlmlwok2s/6OuVrDDpTvMOMzfH04fafe/367ca9e42c4d09f4a5206cd62944ee60/1-16.webp)

  ![Showcase of the notifyParent method
  (2)](//images.ctfassets.net/573xlmlwok2s/66fDM8BU7vQEucjTlYepcH/5d0adbbe680f31f4fab1975537a1fe66/1-17.webp)


  If you take a brief look into the code snippets you can see that the ScrumCard
  calls the notifyParent method, which in fact is the switchToCard method. This
  should help us now to transform from a grid with multiple scrum cards, to a
  single big one and Vice Versa. Now there is only one step left, we have to
  create a beautiful Card UI that will be generated when the isHomePage is
  false.


  ![Finished ScrumCard Widget with
  Padding](//images.ctfassets.net/573xlmlwok2s/4LV0ZLJsFJ7UCoxqRf3y5X/db24bd2d30c96798acdace3214e71bd0/1-18.webp)


  As you most likely already discovered I added here another function for
  notifyParent so that we can swap back to the HomePage.


  Now the switch of card and grid should work already. To improve our app even
  more we can use the
  [“AnimatedSwitcher”](https://www.youtube.com/watch?v=2W7POjFb88g). I found
  this amazing video from the flutter team and that is a perfect use case. The
  AnimatedSwitcher, as you maybe have already guessed, helps us to swap two
  widgets with each other. It adds a smooth transition between these two and
  this looks much more friendly. You just have to put your ternary operator in
  between as a child and give it a Duration how long the transition should take.


  ![Added
  AnimatedSwitcher](//images.ctfassets.net/573xlmlwok2s/3mH5gIp30vEdRJEk0ZIWmZ/3cd1b465008065f5dee8682b46119f83/1-19.webp)


  Ok, so let’s run our simulator or emulator and take a look how the app looks
  now.


  ![Final Result
  Showcase](//images.ctfassets.net/573xlmlwok2s/1MBujErpzf6uRvy7ZAHBEa/62af208f5614e944445ec37b2c36a5f8/finished_app.gif)


  ## Conclusion and What’s next

  This is now an app that already solves one important problem in software
  engineering. From now on I do not have any more to carry real cards from one
  room to another. Never again I will have to grab old smelly cards and show
  them to my Product Owner. We do not want to know which liquids touched those
  filthy cards…


  This is of course just the beginning. With the knowledge that we got during
  this session, we can do much more. This app shows how easy it is with flutter
  to create a nice fully functional app.


  Now it is your turn. My challenge for you till my next article is, to create
  this app or fork my repository from GitHub and extend this app by a small
  additional functionality. To give you some examples that you could add,


  - Make it possible to change from Fibonacci numbers to other Scrum Poker
  numbers

  - Create a history of the selected cards

  - Make a custom Animation between the transitions


  And if you are finished spread the word and let everyone know how cool Flutter
  and our community is! I am already curious to see all the beautiful results.
  If you have any feedback let me know and if you are interested in other cool
  articles, feel free to follow me on Twitter or take a look into my GitHub
  Repository.
keywords:
  - Flutter
  - Dart
  - Full Project
  - Tutorial
  - Personal Development
tags:
  - Flutter
  - Dart
  - Project
---
