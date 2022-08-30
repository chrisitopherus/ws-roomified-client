# ws-roomified-client

[![Version npm](https://img.shields.io/badge/version-0.5.301-blue.svg?logo=npm)](https://www.npmjs.com/package/ws-roomified-client)

**Note: This package is not for production usage in the current state since it is not really finished. Please consider using a different package since I made this package for my own usage.**

> Client implementation of the [ws-roomified](https://www.npmjs.com/package/ws-roomified) module optimized for working with typescript by providing built-in types.

## [Homepage](https://chrisitopherus.github.io/ws-roomified-client)

## Author

👤 **chrisitopherus**

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/chrisitopherus/ws-roomified-client/issues).

***

**Note**: This module is intended to be used in the browser.

## Table of Contents

- [ws-roomified-client](#ws-roomified-client)
  - [Homepage](#homepage)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Installing](#installing)
  - [API docs](#api-docs)
  - [How to use](#how-to-use)
    - [Getting Started](#getting-started)
    - [Setting up the classes](#setting-up-the-classes)
      - [ClientEventEmitter](#clienteventemitter)
      - [Client](#client)
  - [Usage examples](#usage-examples)
    - [Setting up a connection](#setting-up-a-connection)
  - [Changelog](#changelog)
  - [License](#license)

## Installing

```sh
npm install
```

## API docs

See [`/docs/index.html`](https://chrisitopherus.github.io/ws-roomified-client) to view a documentation generated by [`TYPEDOC`](https://typedoc.org/).
You can also checkout the documentation generated in Markdown at [`/docs/md`](https://github.com/chrisitopherus/ws-roomified-client/blob/main/docs/md/modules.md)

## How to use

First of all you obviously need to install the module itself before you can use it.

### Getting Started

**Note: The Guide will be written in Typescript, but no worries besides TS-only features it will be the same for Javascript.**

The module comes with 2 main `abstract` classes.

- `AbstractClient` (Client)
- `AbstractClientEventEmitter` (An Event Emitter implementation)

And besides the same type aliases as the `ws-roomified` module, it also comes with:

- `ClientEvent` Template for creating new Events.
- `ClientEvents` Just a Template to define any event with any data. Use it if you don't care about the event names and data.
- `ClientEventsHelper` Utility type helper for creating a mapped type for the events and their data.

Which are absolutely the same as the Socket ones.
But I thought it would be a bit more readable to reimplement them under other names.

And also with:

- `SocketURL` (Just a literal union type alias for enforcing `ws://` or `wss://` as a prefix).

Its implementation is:

```ts
type SocketURL = `ws://${any}` | `wss://${any}`;
```

And it comes with 1 utility decorator:

- `Bind` Decorator that binds the this inside the class (no longer arrow functions needed).

```ts
// importing the abstract classes
import { AbstractClient, AbstractClientEventEmitter } from 'ws-roomified-client';
// importing the type aliases
import {ClientEvent, ClientEvents, ClientEventsHelper, SocketURL} from 'ws-roomified-client';
```

### Setting up the classes

First of all, lets create some sample events (only for ts users needed):

To accomplish this, we will use two of the exported type aliases `SocketEvent` and `ClientEvent`.

Our goal is to differentiate between events sent by the server, events sent by the client and events within the client itself:

```ts
// type alias containing the events sent by the server
type FromServer = SocketEvent<"message", {message: string}> | SocketEvent<"ping", number>;

// type alias containing the events sent by the client
type FromClient = SocketEvent<"message", string> | SocketEvent<"pong", number>;

// type alias containing the events within the client.
type WithinClient = ClientEvent<"loginBtnClick", HTMLButtonElement>;
```

In order to work with this module, you need to extend the provided abstract classes:

**Note: A list of all methods and properties can be found in the [docs](#api-docs).**

#### ClientEventEmitter

The ClientEventEmitter is just another Event Emitter implementation.

(For TS) The Class takes two optional type parameters in following order:

- `SocketsEventsFromServer` (For events sent from the server)
- `EventsWithinClient` (For events sent within the client)

```ts
// for TS users, pass the type aliases containing the events as generics
class ClientEventEmitter extends AbstractClientEventEmitter<FromServer, WithinClient>{
    constructor() {
        // no parameters needed since the abstract class also does not need any.
        super();
    }
}
```

Use now the ClientEventEmitter class to implement own logic, props or whatever you need.

#### Client

The Client is meant to be a wrapper for the socket connection.

(For TS) The Class takes 3 optional type parameters in following order:

- `EventsFromClient` (For events sent from the client)
- `EventsFromServer` (For events sent from the server)
- `EventsWithinClient` (For events sent within the client)

```ts
// import type alias to provide type-safe parameter
import { SocketURL } from 'ws-roomified-client';
// for TS users, pass the type aliases containing the events as generics
class Client extends AbstractClient<FromClient, FromServer, EventsWithinClient> {

    // we pass the socket connection url and the ClientEventEmitter instance since they are needed by the abstract class
    constructor(url: SocketURL, emitter: ClientEventEmitter) {
        // calling the constructor of the abstract class with the socket and the emitter
        super(url, emitter);
    }
}
```

Use now the Client class to implement own logic, props or whatever you need.

## Usage examples

**Note: Using the things that were used in the guide.**

### Setting up a connection

```ts
// just creating a new client instance
// pass the url for the connection and provide an ClientEventEmitter instance
const client = new Client(`wss://${window.location.host}/socket`, new ClientEventEmitter());
```

## Changelog

We're using the GitHub [releases][changelog] for changelog entries.

## License

[MIT](LICENSE)

[changelog]: https://github.com/chrisitopherus/ws-roomified-client/releases
