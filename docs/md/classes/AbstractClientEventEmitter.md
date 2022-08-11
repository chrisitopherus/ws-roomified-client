[ws-roomified-client](../README.md) / [Exports](../modules.md) / AbstractClientEventEmitter

# Class: AbstractClientEventEmitter<SocketsEventsFromServer, EventsWithinClient\>

Abstract class for an EventEmitter that implements all necessary methods and properties.

**`Abstract`**

 

## Type parameters

| Name | Type |
| :------ | :------ |
| `SocketsEventsFromServer` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsWithinClient` | extends [`ClientEvents`](../modules.md#clientevents) = `any` |

## Table of contents

### Constructors

- [constructor](AbstractClientEventEmitter.md#constructor)

### Properties

- [listeners](AbstractClientEventEmitter.md#listeners)

### Methods

- [emit](AbstractClientEventEmitter.md#emit)
- [off](AbstractClientEventEmitter.md#off)
- [on](AbstractClientEventEmitter.md#on)

## Constructors

### constructor

• **new AbstractClientEventEmitter**<`SocketsEventsFromServer`, `EventsWithinClient`\>()

Constructor of the abstract ClientEventEmitter class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SocketsEventsFromServer` | extends [`SocketEvents`](../modules.md#socketevents) = `any` |
| `EventsWithinClient` | extends [`ClientEvents`](../modules.md#clientevents) = `any` |

## Properties

### listeners

• `Private` **listeners**: `Object` = `{}`

Storage for the listeners.

#### Index signature

▪ [key: `string`]: (`data`: `any`) => `any`[]

#### Defined in

[emitter.ts:13](https://github.com/chrisitopherus/ws-roomified-client/blob/7f123e3/src/emitter.ts#L13)

## Methods

### emit

▸ **emit**<`T`\>(`event`, `data`): `void`

Method for emitting events with data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SocketEvents`](../modules.md#socketevents) \| [`ClientEvents`](../modules.md#clientevents) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T`[``"event"``] | The specified event. |
| `data` | [`DataByEvent`](../modules.md#databyevent)<`T`[``"event"``], `T`\>[``"data"``] | The data to be emitted. |

#### Returns

`void`

___

### off

▸ **off**<`T`\>(`event`, `handler`): `void`

Method for unbinding listeners from certain events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends \`${any}\` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event where a listener should be removed. |
| `handler` | (`data`: [`DataByEvent`](../modules.md#databyevent)<`T`, `SocketsEventsFromServer`\> \| [`DataByEvent`](../modules.md#databyevent)<`T`, `EventsWithinClient`\>[``"data"``]) => `any` | The Listener that should be removed from a specified event. |

#### Returns

`void`

___

### on

▸ **on**<`T`\>(`event`, `handler`): `void`

Method for binding listeners to certain events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends \`${any}\` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event that should be listened to. |
| `handler` | (`data`: [`DataByEvent`](../modules.md#databyevent)<`T`, `SocketsEventsFromServer`\> \| [`DataByEvent`](../modules.md#databyevent)<`T`, `EventsWithinClient`\>[``"data"``]) => `any` | The Listener that should be called when the event occurs. |

#### Returns

`void`
