---
author: "Max Weber"
title: "Code Analysis & Linting in Flutter and Dart"
date: "2021-04-01"
description: "In this article I want to tell you about my personal development story"
tags: ["Flutter", "Linter", "Tutorial"]
ShowToc: true
ShowBreadCrumbs: true
---

## Setup Code Linting for a Flutter project

In the beginning, let me say that additional Linting in Flutter is a
controversial topic. On one side, many love code linting, because it allows us
to focus on crucial parts of our code. However, some people are not fond of it
because it restricts them and leads to false build errors. But before we start
the discussion, let us begin with what code linting is and how we can use its
full potential.

Code Linting is an automated verification that your code is correct. There is
always a Linter that we all use in our day to day work. In editors like VSCode
and Android Studio, we receive errors when our code is not unnable.

The visualisation of build errors are already features of our Linter. This
integrated Code Linter is a tool that checks your code for build problems,
that means you would not even be possible to run your application. We do not
have to search for errors in our code, and when everything is green, we are
sure that our code is executable.

Thanks to modern tools, we can extend these rules and check our current
project for more than just broken code. For example, we can tell our Linter
that we want to check for wrong code styling. In Dart and Flutter the
additional lint rules are managed by a file called analysis_options.yaml. If
you have never heard about a yaml file extension, it is just a convenient way
to structure a file that allows you to create tree structures with two spaces.
Feel free to read more about the .yaml file extension [here][1].

## Our Mission: Enforce single quotes in our project

Let us assume we would force all our developers to work on our project,

that every string should be done with a single quote. Our IDE should show it
immediately, like in the image below.

![Example of the results][2]

To achieve that the static code analyzer of Dart and Flutter recognize that
mistake, we must create an analysis_options.yaml responsible for our whole
project gives our Dart analyzer instructions that run in the background and
verifies our code. We can create the analysis_options in the root of our
project, and most IDE’s like Android Studio or Visual Studio Code will right
away understand what it needs to do with it.

Now, let’s take a closer look into the analysis_options file. Inside of the
analysis_options, we can modify the behaviour of the analyzer and the linter.

## The Analyzer & Linter

In our first section in the common analysis_options.yaml file is usually the
analyzer. Here we can configure a more general part of how we want to check
our code. Firstly, we can set up if we want to show errors, warnings, or as
information for specific rules. Secondly, we can exclude files and folders
from the checking system. Moreover, we can [ignore specific rules][3]. Last
but not least, we have the chance to introduce additional [strict type
checking][4] and [experimental behaviour][5] like no slow checks or
super-mixins.

To use now the main information that we registered to the Analyzer, we have to
specify the rules that we want to apply in our project. Therefore, we use the
Linter section of the analysis_options.yaml. In the linter section, we define
which rules are applied to our project. There are around 180 rules that you
can specify and make them right away visible in your application. To explain,
all of them would bust this blog post, so feel free to look at the list of
linting rules you can specify at the Linter for Dart site.

## Linting Rules

At the time I write this post, there are three different categories of Linting
Rules. The first is the Error Rules, and they are possible coding errors.
Secondly, we have the Style Rules that define code style matters, like a
single quote or double quote. It does not hint whether your code is stable or
not, but it helps align the whole codebase. The pub rules follow both. This
set of rules defines how a pub package has to behave; it includes only two
rules on how to name a package and sort dependencies in your pubspec.yaml.

## [avoid_init_to_null][6]

As the name already states with this linter rule, you do not allow anymore to
initialize a variable with null. But why could this be helpful? In Dart, every
variable that is not specified with a value is automatically set to null.
There is no concept of empty memory or any other trap that we could fall into.
With that in mind, a specific declaration of a variable to null would only
bloat our code and is unnecessary and unneeded.

![Linter shows message][7]

## [use_string_buffers][8]

Another fantastic rule that many developers are not really aware of is a more
performant way to concatenate strings. The String Buffer helps you improve the
concatenation of Strings and allows you to do it in the most performant way.
To make sure that all contributors in your code concatenate strings
efficiently, we can set the [use_string_buffers][8] style rule.

![Linter shows a warning if you could use a StringBuffer][9]

![StringBuffer provides a performant way to handle Strings][10]

## [prefer_double_quotes][11]

The prefer double quotes rule allows you to take control if you want to
enforce a specific quote style. Here we prefer in our code base double quotes
but also the single quote rule exists and makes it possible to enforce quote
style. This is especially helpful if you work in a multilanguage team because
Keyboard layouts differ from country to country. In contrast, in English and
American speaking country, the single quote is easier accessible and mostly
used in other countries like Germany, the double quote is usually prefered.
This rule leads to clear information on how the maintainer or the owner of a
package or project wants to work in general.

![Prefer double quotes linting rule][12]

This is also the rule that we will use to finally solve our problem and
enforce double quotes for the whole project.

## The Solution

Alright now that we know how the Linter and the Analyzer work lets solve our
goal for this blog post, we want to enforce every developer who works on our
codebase to prefer double quotes, and if they do not, we want to really show
it as an error. The first thing we have to do is to define the Analyzer with
the correct severity of the issue. In our case, this would be “error”. Next,
we just defined in the pubspec.yaml our linter with the new rule that we want
to add.

![Analysis Options][13]

Now after we have specified the rule and the severity of the enforcement we
can already see in our IDE the errors appearing.

![Linting Error][14]

If we now run `dart analyze` in our terminal inside our project, we receive a
full analyzing report. Now we can use this command inside our terminal. If we
use this command now in our CI / CD chain, the build will fail, and our team
would have to fix it to merge it in our project.

## Lint Rules as a package

As always, there are fantastic packages that come with a predefined selection
of rules that makes it easier to set up the first baseline that you want to
use in your project. Let us first have a look at how we can include them in
our project.

## Install a third party linting rule set

In order to add a linting rule set we have to first add the dependency to the
pub.dev package in our pubspec.yaml. As an example we want to add the Lint
package to our project.

![Dev dependencies][15]

The next step is to import the rules from the package into our
analysis_options.yaml.

![Dependency in Analysis Options][16]

As soon as you open now the different files, you will now recognize that the
package’s linting rules are already taken into account and are ready to use.
Let us assume that you do not like a rule. You can easily overwrite the
behaviour by including the linter and analyzer. Your rules will overwrite the
package’s rules, with that you will always have control over the linting.

![Finalized Analysis Options][17]

### Lint Package

[Pascal Welsch][18] creates the first Lint package, and it includes a baseline
of lint rules for Flutter and Dart Projects. You can extend or exclude rules
afterwards if you use this package, but it is created with consumers. That
means if you are not necessarily working on the Flutter project. This should
be your way to go.

### Pedantic

The second package that I want to introduce you is the so-called pedantic
package. The Flutter team created the pedantic package to support a set of
rules that is usually way more restrictive in terms of usage and allowances
and is a bit over-engineered from time to time.

## Conclusion

In this post, we learned how to use the Linting Rules to our advantage and
enforce rules so that every developer who collaborates with us works in the
same way. To generate these rules and discuss them in a team could be tedious,
and many people would say that it is not worth the effort. But if the
conversation and discussion start now, you have the right tools to join the
discussion and give some valuable insights.

Thank you for reading, stay curious and if you have time consider supporting me on [Patreon](https://patreon.com/dev_cafe).

[1]: https://yaml.org/
[2]: //images.ctfassets.net/573xlmlwok2s/2rmD7l23zolo5Zl0r2WBCO/0e84e485ce3e6d7ac7dfcd633d4a238d/single_quote.png
[3]: https://dart.dev/guides/language/analysis-options#ignoring-rules
[4]: https://dart.dev/guides/language/analysis-options#enabling-additional-type-checks
[5]: https://dart.dev/tools/experiment-flags#using-experiment-flags-with-the-dart-analyzer-command-line-and-ide
[6]: https://dart-lang.github.io/linter/lints/avoid_init_to_null.html
[7]: //images.ctfassets.net/573xlmlwok2s/53HTCYMIfyB2ZkLSFKdiv4/4deb4fe435cb4b0f0c86aeaec5ffec1d/on_explicit.png
[8]: https://dart-lang.github.io/linter/lints/use_string_buffers.html
[9]: //images.ctfassets.net/573xlmlwok2s/1ILPb6vTxaV9QnyVYGfWRL/366f043aebe9e13d07abd9c9be84050e/linter_shows_warning_string_buffer.png
[10]: //images.ctfassets.net/573xlmlwok2s/6uSw9J8ihExiEYo9VdPOlU/2b6a3b9bc7f4828d0cf47980af626c03/stringbuffer_provide_performant_way.png
[11]: https://dart-lang.github.io/linter/lints/prefer_double_quotes.html
[12]: //images.ctfassets.net/573xlmlwok2s/1tfWMjKNKlfU7UtL6EyDqp/52a33fd12ae95e4bac364593529bb16a/prefer_double_quotes.png
[13]: //images.ctfassets.net/573xlmlwok2s/5dtJ7slNnHyN7oww539koa/226e89ba9c2e483f5b37d47bfc7b977a/analysis_options.png
[14]: //images.ctfassets.net/573xlmlwok2s/258oKwq3UdM2bJAEw0tH7P/3f50a1a2151caf565ab09e0106075d99/linting_error.png
[15]: //images.ctfassets.net/573xlmlwok2s/4BEzvdWeDYTa1gp0R56BUD/5baa41de723e19da88edec2e1fcc80ba/dev_dependencies.png
[16]: //images.ctfassets.net/573xlmlwok2s/6ZougBZE6Eyc6iYUwzkfKy/f002cee75e48ac4c8b59671acb8419d8/anlysis_options_dep.png
[17]: //images.ctfassets.net/573xlmlwok2s/5R0uixQq6g2flt2nDstjzS/b665618439ed4ae44b8b258e6c935894/solution.png
[18]: https://pascalwelsch.com/
