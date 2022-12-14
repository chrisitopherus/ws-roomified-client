[ws-roomified-client](README.md) / Exports

# ws-roomified-client

## Table of contents

### Classes

- [AbstractClient](classes/AbstractClient.md)
- [AbstractClientEventEmitter](classes/AbstractClientEventEmitter.md)

### Type Aliases

- [ClientEvent](modules.md#clientevent)
- [ClientEvents](modules.md#clientevents)
- [ClientEventsHelper](modules.md#clienteventshelper)
- [DataByEvent](modules.md#databyevent)
- [SocketEvent](modules.md#socketevent)
- [SocketEvents](modules.md#socketevents)
- [SocketEventsHelper](modules.md#socketeventshelper)
- [SocketURL](modules.md#socketurl)

### Functions

- [Bind](modules.md#bind)

## Type Aliases

### ClientEvent

Ƭ **ClientEvent**<`E`, `D`\>: `Object`

Template for creating new Events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends \`${any}\` |
| `D` | extends `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `D` |
| `event` | `E` |

#### Defined in

[types/socket.ts:31](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L31)

___

### ClientEvents

Ƭ **ClientEvents**: [`ClientEvent`](modules.md#clientevent)<\`${any}\`, `any`\>

Just a Template to define a structure.

? By default this type defines SocketEvents to be any event with any data.

#### Defined in

[types/socket.ts:41](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L41)

___

### ClientEventsHelper

Ƭ **ClientEventsHelper**<`Events`\>: { [E in Events["event"]]: DataByEvent<E, Events\>["data"] }

Utility type helper for creating a mapped type for the socket events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`ClientEvents`](modules.md#clientevents) |

#### Defined in

[types/socket.ts:46](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L46)

___

### DataByEvent

Ƭ **DataByEvent**<`E`, `T`\>: `T` extends { `data`: `any` ; `event`: `E`  } ? `T`[``"data"``] : `never`

Utility type helper for finding the data for a specific event name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`SocketEvents`](modules.md#socketevents)[``"event"``] |
| `T` | `T` |

#### Defined in

[types/socket.ts:19](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L19)

___

### SocketEvent

Ƭ **SocketEvent**<`E`, `D`\>: `Object`

Template for creating new Events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends \`${any}\` |
| `D` | extends `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `D` |
| `event` | `E` |

#### Defined in

[types/socket.ts:4](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L4)

___

### SocketEvents

Ƭ **SocketEvents**: [`SocketEvent`](modules.md#socketevent)<\`${any}\`, `any`\>

Just a Template to define a structure.

? By default this type defines SocketEvents to be any event with any data.

#### Defined in

[types/socket.ts:14](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L14)

___

### SocketEventsHelper

Ƭ **SocketEventsHelper**<`Events`\>: { [E in Events["event"]]: DataByEvent<E, Events\>["data"] }

Utility type helper for creating a mapped type for the socket events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`SocketEvents`](modules.md#socketevents) |

#### Defined in

[types/socket.ts:24](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L24)

___

### SocketURL

Ƭ **SocketURL**: \`ws://${any}\` \| \`wss://${any}\`

#### Defined in

[types/socket.ts:50](https://github.com/chrisitopherus/ws-roomified-client/blob/88970e3/src/types/socket.ts#L50)

## Functions

### Bind

▸ **Bind**(`_`, `_2`, `descriptor`): `PropertyDescriptor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |
| `_2` | `string` \| `symbol` |
| `descriptor` | `PropertyDescriptor` |

#### Returns

`PropertyDescriptor`
