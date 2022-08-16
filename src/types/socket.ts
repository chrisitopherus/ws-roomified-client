/**
 * Template for creating new Events.
 */
type SocketEvent<E extends `${any}`, D extends any> = {
    event: E,
    data: D
}

/**
 * Just a Template to define a structure.
 * 
 * ? By default this type defines SocketEvents to be any event with any data.
 */
type SocketEvents = SocketEvent<`${any}`, any>

/**
 * Utility type helper for finding the data for a specific event name.
 */
type DataByEvent<E extends SocketEvents['event'], T extends { event: string, data: any }> = T extends { event: E, data: any } ? T["data"] : never;

/**
 * Utility type helper for creating a mapped type for the socket events.
 */
type SocketEventsHelper<Events extends SocketEvents> = {
    [E in Events["event"]]: DataByEvent<E, Events>["data"]
}

/**
 * Template for creating new Events.
 */
type ClientEvent<E extends `${any}`, D extends any> = {
    event: E,
    data: D
};

/**
 * Just a Template to define a structure.
 * 
 * ? By default this type defines SocketEvents to be any event with any data.
 */
type ClientEvents = ClientEvent<`${any}`, any>;

/**
 * Utility type helper for creating a mapped type for the socket events.
 */
type ClientEventsHelper<Events extends ClientEvents> = {
    [E in Events["event"]]: DataByEvent<E, Events>["data"]
}

type SocketURL = `ws://${any}` | `wss://${any}`;

export { SocketEventsHelper, SocketEvent, SocketEvents, DataByEvent, ClientEvent, ClientEvents, ClientEventsHelper, SocketURL };