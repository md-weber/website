---
author: "Max Weber"
title: "Setup a Flutter Web Project on GitHub Pages"
date: "2020-02-12"
image: //images.ctfassets.net/573xlmlwok2s/63uv5cSmht33XdGP1QEcJb/34375000e4064fcebd0aa69bb86fc89b/github_pages.webp
tags: ["Flutter", "GitHub", "Flutter Web"]
ShowToc: true
ShowBreadCrumbs: true
---

To enable flutter web, you have to set up your Flutter CLI properly, and after
that, you have to make sure you are on the right channel. Today when I write
this post, Flutter web is still in beta, so we have to select a branch that
supports beta features.

```bash

>> flutter channel


Flutter channels:

* master
 dev
* beta
 stable
```

The master channel is the current tip of development. It contains the newest
changes in the framework but it is also vulnerable to breaking changes. So
that means in the worst case something is going wrong. The beta channel is a
code selection of the flutter team once a month to a branch that contains the
newest released features. It is selected and more stable. So if you want to
try around, this would be the channel to go.

For more information about the channels in Flutter, take a look
[here](https://github.com/flutter/flutter/wiki/Flutter-build-release-channels).

```bash

>> flutter channel beta

# To download the Flutter SDK execute flutter doctor

>> flutter doctor

```

## Enable Flutter Web

After we set the correct channel and downloaded the new version of flutter, we
have to enable the web development model.

```bash

>> flutter config --enable-web

Setting

"enable-web" value to "true".

>> flutter config Settings: enable-web: true

```

Now we are ready to go. Next, we have to create a basic Flutter project. This
will create all the relevant folders for us.

```bash

>> flutter create ./project-name

```

Flutter create will create all the relevant folders for us. If we open up that
project, we should see now the folder “web” inside of the project. The last
step is to run the app. So go into the project folder and run flutter devices.
We should see now chrome and Web Server as a choice.

The last step is to run the app. So go into the project folder and run flutter
devices. We should see now chrome and Web Server as a choice.

```bash

cd ./project-name

flutter devices

# Chrome • chrome • web-javascript • Google Chrome 80.0.3987.87

# Web Server • web-server • web-javascript • Flutter Tools


flutter run -d chrome

# Should startup your web dev server.

```

After the flutter run -d chrome command, the chrome browser will start up and
reveal the Flutter app.

![Flutter Project: Scrum Poker App Feature
  Image](//images.ctfassets.net/573xlmlwok2s/4ON4mK38XfjDDUXYiyWCWP/1aac489f61fbdd1c6f5b20048407d013/flutter_web.png)

Perfect, we did it!

## Deploy on GitHub

Before we can deploy, we have to create a new repository in GitHub and in
order to use it as GitHub pages, it needs to have a specific naming
convention.

```
 Template: >GitHub-UserName<.github.io
 Example: md-weber.github.io
```

Now we can create anything that we want in our Flutter app. If we are ready to
go we have to build the app.

```bash

flutter build web --release

# Compiling lib/main.dart for the Web… 1.6s

```

After that in your project will be a build/web folder. This folder contains
all the files that you will need to upload to your GitHub Repository. Open a
terminal and switch to the folder and push it into your repository.

If you are new to GitHub and Git this
[Guide](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
could help you.

```bash

>> cd ./build/web


# The following are the steps that I took, they could vary from project to
project.

>> git init

>> git remote add origin

>> git add .

>> git commit -m "Init Flutter web project"

>> git push

```

After the push, GitHub will take care of the rest. It immediately creates for
you an environment and pushes your changes to the website. Inside of your
GitHub repository, you will find a new Tab called environments. In this tab,
you can see how far your deployment process is. Now you can enter find under
https://::username::.github.io or my example
[https://md-weber.github.io/](https://md-weber.github.io/).

![Flutter Project: Scrum Poker App Feature
  Image](//images.ctfassets.net/573xlmlwok2s/2JyUnA8TjHzwgE0mw8FEBa/d1917370f44938b01ef7d0e725182ccf/1-1.webp)

If you get at that stage a 404 error, please try to add the /index.html to
your path and now you should see your very first Flutter Web App. For more
information I created a video that explains everything a little bit in more
detail.

Thank you for reading, stay curious and if you have time consider supporting me on [Patreon](https://patreon.com/dev_cafe).
