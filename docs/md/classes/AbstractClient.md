[ws-roomified-client](../README.md) / [Exports](../modules.md) / AbstractClient

# Class: AbstractClient<EventsFromClient, EventsFromServer, EventsWithinClient\>

Abstract class for a Client that implements all necessary methods and properties.

**`Abstract`**

 

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventsFromClient` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsFromServer` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsWithinClient` | extends [`ClientEvents`](../modules.md#clientevents) = `any` |

## Table of contents

### Constructors

- [constructor](AbstractClient.md#constructor)

### Properties

- [\_socket](AbstractClient.md#_socket)
- [emitter](AbstractClient.md#emitter)

### Accessors

- [socket](AbstractClient.md#socket)

### Methods

- [receiveMessage](AbstractClient.md#receivemessage)
- [sendMessage](AbstractClient.md#sendmessage)

## Constructors

### constructor

• **new AbstractClient**<`EventsFromClient`, `EventsFromServer`, `EventsWithinClient`\>(`url`, `emitter`)

Constructor of the abstract Client class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventsFromClient` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsFromServer` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsWithinClient` | extends [`ClientEvents`](../modules.md#clientevents) = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`SocketURL`](../modules.md#socketurl) | URL for the socket connection. |
| `emitter` | [`AbstractClientEventEmitter`](AbstractClientEventEmitter.md)<`EventsFromServer`, `EventsWithinClient`\> | EventEmitter instance used for handling the incoming socket events and events within the client. |

## Properties

### \_socket

• `Private` **\_socket**: `WebSocket`

The socket connection.

#### Defined in

[client.ts:15](https://github.com/chrisitopherus/ws-roomified-client/blob/798c932/src/client.ts#L15)

___

### emitter

• **emitter**: [`AbstractClientEventEmitter`](AbstractClientEventEmitter.md)<`EventsFromServer`, `EventsWithinClient`\>

EventEmitter instance used for handling the incoming socket events and events within the client.

#### Defined in

[client.ts:29](https://github.com/chrisitopherus/ws-roomified-client/blob/798c932/src/client.ts#L29)

## Accessors

### socket

• `get` **socket**(): `WebSocket`

Getter for reading the socket instance.

#### Returns

`WebSocket`

## Methods

### receiveMessage

▸ `Private` **receiveMessage**<`T`\>(`msg`): `void`

Method for receiving a socket message from the server.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `MessageEvent`<`T`\> | The socket message. |

#### Returns

`void`

___

### sendMessage

▸ **sendMessage**<`T`\>(`event`, `data`): `void`

Method that sends socket messages to the server.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends \`${any}\` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event. |
| `data` | [`DataByEvent`](../modules.md#databyevent)<`T`, `EventsFromClient`\> | The data accordingly to the event. |

#### Returns

`void`
