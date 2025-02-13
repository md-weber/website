---
author: "Max Weber"
title: "Flutter Navigation – Everything you need to know"
date: "2020-03-27"
image: //images.ctfassets.net/573xlmlwok2s/4ZqhgnxmxyVfiOo5a3a5g0/a9b1a6d2c1d259b07db7e54e1587997d/navigation.webp
tags: ["flutter", "Web", "Dart"]
ShowToc: true
ShowBreadCrumbs: true
---

Navigation is in every application a vital part, and the benefit of Flutter
is, that it already contains an excellent routing system built-in. The benefit
of a built-in routing system is a huge advantage that we have as flutter
developers. As always, we have to know about the hidden traps and understand
the tools so that we can decide for the best option for a given use case.

With a good routing strategy, you have a lot fewer problems in the future, and
it also helps you to reduce boilerplate and maintenance cost in the long run.

## How does flutter navigation work?

In Flutter we have three different options of navigating between screens.

- Direct Navigation with MaterialPageRoute

- Static Navigation with Route Map

- Dynamic Navigation with Generated Routes

I want to show you all three options on a minimal app that I created.

![Example app of flutter
  navigation](//images.ctfassets.net/573xlmlwok2s/PjYfF3o0gqIzp2QvjKbII/e488fc9440b48082fce5cedb4bf62daf/navigation_example_app.gif)

### 1. Direct Navigation with MaterialPage Route

The primary navigation that you mostly use in prototyping is usually the
direct navigation with MaterialPageRoute. You access an instance of the
Navigator and push a new MaterialPageRoute inside. The route creates a new
Widget that gets put on top of the navigation stack.

```dart

Navigator.push(
    context,
    MaterialPageRoute(
        builder: (BuildContext context) => LobbyScreen(),
    ),
);

```

The MaterialPageRoute is responsible for more than just routing. It also
controls the transition and keeps the old route in memory on the stack so that
we can route back as soon as we want. For that, we should call
Navigator.pop(). This method removes the first Widget from the stack.

## 2. Static Navigation with Route Map

The second option that we have is the route map, and this is the preferred way
if you use a state management tool like, Provider or BloC pattern. You have
the option to create a Map with String keys that identifies different
WidgetBuilder Methods and take care of the navigation.

```dart

return MaterialApp(
  title: 'Flutter Demo',
  theme: ThemeData.light(),
  initialRoute: LoginScreen.route,
  routes: {
    LobbyScreen.route: (context) => LobbyScreen(),
    LoginScreen.route: (context) => LoginScreen(),
    GameScreen.route: (context) => GameScreen(),
  },
);

```

The `LobbyScreen.route`, `LoginScreen.route` and `GameScreen.route` are just
the static const String representation of the name of this route. Now you can
execute the pushNamed against the Navigator to push the new route on top of
the stack.

```dart

Navigator.pushNamed(context, LobbyScreen.route);

```

The static “route” is a variable that contains a string that identifies the
route to the specific Widgets. Be mindful that if one of your ways contains a
slash as a prefix, you have to provide at least one path with a pure “/”. “/”
is your primary way. The Widget Builder function, that the map represents for
the different routes, getting used to create a MaterialPageRoute inside of the
Flutter Framework to navigate to the different Views.

The only disadvantage is that you cannot pass a value inside of a route. The
dynamic navigation will handle the possibility to pass arguments to the route.

## 3. Dynamic Navigation with onGeneratedRoute

The third option that I would like to add is the option to create an
onGeneratedRoute. The onGeneratedRoute has the advantage that you can create
routes and access the passed through arguments.

```dart

onGenerateRoute: (settings) {

switch (settings.name) {
  case LoginScreen.route:
    return MaterialPageRoute(builder: (_) => LoginScreen());
    break;
  case LobbyScreen.route:
    return MaterialPageRoute(builder: (_) => LobbyScreen());
    break;
  case GameScreen.route:
    return MaterialPageRoute(builder: (_) => GameScreen());
    break;
  default:
    return MaterialPageRoute(builder: (_) => LoginScreen());
}

}

```

The initial route takes still the responsibility to add the correct route to
the stack. The benefit is now, if we call pushNamed, we can use the value of
the argument and pass more information into the route. We can initialize the
Widget with additional information. So if we push, for example from the Login
Screen to the Lobby Screen, we can pass some arguments into the pushNamed
method.

```dart

onPressed: () {
  Navigator.pushNamed(
    context,
    LobbyScreen.route,
    arguments: {"user-msg": "Thank you for reading!"},
    );
}

```

As you can see, the push namedMethod takes a parameter called “arguments”
which is anything (Object). In our case, we pass a map down that contains a
user message.

If we change now the onGeneratedRoute that it accepts the argument and passes
it down to the LobbyScreen, we pass information into another route with this
solution.

> Disadvantage of this solution is that you will lose all types here, so you
> have to type-check against it later on.

```dart

onGenerateRoute: (settings) {
    switch (settings.name) {
      case LoginScreen.route:
        return MaterialPageRoute(builder: (_) => LoginScreen());
        break;
      case LobbyScreen.route:
        return MaterialPageRoute(builder: (_) =>
            LobbyScreen(
                settings.arguments
            ));
        break;
      case GameScreen.route:
        return MaterialPageRoute(builder: (_) => GameScreen());
        break;
      default:
        return MaterialPageRoute(builder: (_) => LoginScreen());
    }
  },
```

```dart

class LobbyScreen extends StatelessWidget {
  static const String route = "lobby-new";
  final Map<String, String> arguments;

  LobbyScreen(this.arguments);

  @override
  Widget build(BuildContext context) {
    ...
    Text(
      arguments["user-msg"],
      style: GoogleFonts.sawarabiGothic(fontSize: 34.0),
      textAlign: TextAlign.center,
    )
    ...
  }
}

```

## Packages you should be aware of

Of course, this is the build-in options for routing and navigation, and there
are loads of fabulous packages that could help you optimize your code even
further. Some packages that I can recommend are.

### Beamer

Another very viable option is [Beamer](https://pub.dev/packages/beamer) added
into the ranks of Flutter favirote you can be sure this package contains
quality routing for you.

### Fluro

[Fluro](https://pub.dev/packages/fluro) is an excellent addition to the
already existing router system, that makes it way more comfortable to use
custom transitions between screens.

### Angel Route

You worked maybe with an HTTP Server before. [Angel
Route](https://pub.dev/packages/angel_route) comes from the Angel HTTP Server.
The routing system is in this case isomorphic, and it keeps your code clean
and makes it easy to read. Additionally, it handles the pass over of id’s and
other information slightly more accessible.

### Flutter Modular

The [Flutter Modular](https://pub.dev/packages/flutter_modular) package is not
a simple routing framework. It is a more general project architecture, but it
adds many functionalities to the router and uses the standard routing system
very smart.

## Conclusion

Flutters Navigation system is reliable and should help your project in nearly
all cases to find the right tooling. There are just a few things that you
should keep in mind. But most of the Routing system is already part of the
Flutter Framework.

If you search further material on Navigation and route I highly recommend the
talk of Simon Lightfood about Navigator and Transitions.

Thank you for reading, stay curious and if you have time consider supporting me on [Patreon](https://patreon.com/dev_cafe).
