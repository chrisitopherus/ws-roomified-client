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

types/socket.ts:31

___

### ClientEvents

Ƭ **ClientEvents**: [`ClientEvent`](modules.md#clientevent)<\`${any}\`, `any`\>

Just a Template to define a structure.

? By default this type defines SocketEvents to be any event with any data.

#### Defined in

types/socket.ts:41

___

### ClientEventsHelper

Ƭ **ClientEventsHelper**<`Events`\>: { [E in Events["event"]]: DataByEvent<E, Events\>["data"] }

Utility type helper for creating a mapped type for the socket events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`ClientEvents`](modules.md#clientevents) |

#### Defined in

types/socket.ts:46

___

### DataByEvent

Ƭ **DataByEvent**<`E`, `T`\>: `T` extends { `event`: `E`  } ? `T` : `never`

Utility type helper for finding the data for a specific event name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`SocketEvents`](modules.md#socketevents)[``"event"``] |
| `T` | extends [`SocketEvents`](modules.md#socketevents) |

#### Defined in

types/socket.ts:19

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

types/socket.ts:4

___

### SocketEvents

Ƭ **SocketEvents**: [`SocketEvent`](modules.md#socketevent)<\`${any}\`, `any`\>

Just a Template to define a structure.

? By default this type defines SocketEvents to be any event with any data.

#### Defined in

types/socket.ts:14

___

### SocketEventsHelper

Ƭ **SocketEventsHelper**<`Events`\>: { [E in Events["event"]]: DataByEvent<E, Events\>["data"] }

Utility type helper for creating a mapped type for the socket events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Events` | extends [`SocketEvents`](modules.md#socketevents) |

#### Defined in

types/socket.ts:24

___

### SocketURL

Ƭ **SocketURL**: \`ws://${any}\` \| \`wss://${any}\`

#### Defined in

types/socket.ts:50
