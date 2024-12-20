---
author: "Max Weber"
title: "GitHub Actions - For a Flutter Developer"
date: "2019-09-09"
image: //images.ctfassets.net/573xlmlwok2s/1BpOSe4z2wyobaMV34pnjq/f889c640bdb8c5340c93143c682fc30e/github-actions.webp
tags: ["GitHub Actions", "DevOps", "Dart", "Flutter"]
ShowToc: true
ShowBreadCrumbs: true
---

## GitHub Actions — Can I eat that?

The short answer is no, but if you want to build, pack and deploy your app, it
is maybe something for you. [Github
Actions](https://github.com/features/actions) is the CI / CD project from
GitHub. The CI / CD allows us to set up workflows for different scenarios of
our app. It gives us the possibility to build our app, test our application
and also to publish at the end our APK. The best thing is that you dont even
have to leave your GitHub page.

So why should I use GitHub’s new service compared to all the others like
[Travis CI](https://travis-ci.org/),
[Bitbucket](https://bitbucket.org/product) or
[codemagic](https://codemagic.io/start/)? Well on the first glance the pricing
model is ridiculously cheap compared to the competitors. All public
repositories are free for this service (GitHub announce that they love
OpenSource). And private repositories can start with a free plan of 2000 build
minutes a month. Additionally it allows other users to create their own
actions that they can share with other users.

## GitHub Actions in Action

So let’s get into it, by integrating [GitHub
Actions](https://github.com/features/actions) with our flutter repository. As
soon as you open your git repo you will find a new Tab called “Actions”. This
brings you to a page where you can find all your created workflows and if they
where successful or not.

When you navigate into the actions tab the first time, you will find a message
that informs you that it has already scanned your repository and gives you a
suggestion. This suggestion would create us a basic workflow that fits our
current project. That is quite handy and allows us to implement the first
steps really fast. In our Flutter project it will recommend us the typical
dart installation path. But because we want to install a flutter application
we have to do something different here.

We have to create a custom workflow to achieve a build with flutter. We could
skip the initialization of the workflow and write our CI / CD code directly on
the website of GitHub. This would be much harder and therefore I decided to do
that in our repository with the IDE of our choice. Therefore, we jump right
into our IDE and create a new folder “.github” in our project root for our
GitHub Actions. The “.github” folder contains all our files that represents a
workflow in our GitHub Actions. For example, we can create our first
main.yaml.

```yaml
name: CI

on:
  pull_request:
    branches:
      - development
      - master

jobs:
  test:
    name: Flutter Tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-java@v1
        with:
          java-version: "12.x"
      - uses: subosito/flutter-action@v1
        with:
          flutter-version: "1.7.8+hotfix.4"
      - run: flutter doctor
      - run: flutter pub get
      - run: flutter test

  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Run a one-line script
        run: echo Hello, world!
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
```

Line 1: We declare our Action name in the file above we call it CI. The name
will be represented later on the GitHub Page to indicate if this workflow
failed or passed. On line 3–7, we describe the triggers for that workflow. In
the our example, the workflow will be executed whenever we create a pull
request to master or development branch.

From line 9 to 27 we declare the Jobs. Our first job has the name “Flutter
Tests”. Which is again a collection of Job, and every Job contains one or more
steps. It is good to know that every Job has its own virtual environment,
which let it not leak information to another job. Additionally, it is
essential to know that jobs can work in parallel or could be dependent on each
other. For example, component tests and unit tests could run in parallel, but
both are dependent on the build. So if the build fails, the tests will not
run, but if one of the checks fails, the other one will continue.

In-Line 19–21, we use an open-source action that [Alif
Rachmawadi](https://github.com/subosito) created for us, to install our
flutter dependency. These open-source actions show a very great thing of
GitHub Actions. Every user can create their Actions and publish them for
everyone.

Now, after we installed our flutter dependency, it is time to let in the last
three commands let run our flutter doctor, flutter pub get and flutter test.
Moreover, that is it, we created our first pipeline, and after we create a
pull request to development or master the test is running.

![GitHub Actions: Running
  Status](//images.ctfassets.net/573xlmlwok2s/1bXy6Ifd38r1F0mi4CjnIh/df6fe7091ca71ccaec35f6b96ea4edad/workflow-runs.webp)

## Benefits of GitHub Actions

Another benefit is that it is possible to protect branches. Therefore only
Pull Requests with a green workflow are elligable to be merged. You can find
that option in “settings” branches, and there you select a branch that you
want to protect.

![Add merge request
  checks](//images.ctfassets.net/573xlmlwok2s/41Iokg1FijFMNl22kF3vt7/f9b025347deff1e6a4f943d954564ae9/improve-merge-requests.png)

![merge-request-status](//images.ctfassets.net/573xlmlwok2s/5BNgB6wGNGnnmXBYixoOjc/1b497212a67f3f30a081e7377998b5dc/merge-request-status.png)

So GitHub indicates us now very clear that we should not merge it and other
contributors are not even allowed to merge without a green flag. That supports
our code quality and also our time management.

## Conclusion

We created our very first GitHub Actions and had the opportunity to test our
flutter application. For us Flutter developers, it is not as convenient as
codemagic that creates the whole pipeline in seconds and is ready to use from
development to publishing. However, if you take the time and effort to create
it in GitHub, you can get a very cheap plan for your build pipeline.

In my opinion, we have here an excellent tool for building our applications
and see if the tests are green before we work further. Also for Community
projects this seems like a very convenient way to work. However, I also could
find one small downside. Currently, it seems not possible to cache some
information, and with that, the build time for the flutter project boilerplate
was around 1 min 38 seconds. If the Flutter SDK could be cached, I think it
would come down to maybe ~40 seconds.

Did you set up your first GitHub Actions? What do you think has it a chance to
be one of the most used building pipelines in the world? Let me know in the
comments. If you want to see how the flutter pipeline works in action, feel
free to take a peek in my current [project
repository](https://github.com/md-weber/v11-solo-MyracleDesign)

Thank you for reading, stay curious and if you have time consider supporting me on [Patreon](https://patreon.com/dev_cafe).
