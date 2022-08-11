import { ClientEvents, SocketEvents, ClientEventsHelper, DataByEvent } from "./types/socket.js";

/**
 * Abstract class for an EventEmitter that implements all necessary methods and properties.
 * @abstract
 * @class
 */
export abstract class AbstractClientEventEmitter<SocketsEventsFromServer extends SocketEvents = any, EventsWithinClient extends ClientEvents = any> {
    /**
     * Storage for the listeners.
     * @private
     */
    private listeners: {
        [key: string]: Array<(data: any) => any>
    } = {};

    /**
     * Constructor of the abstract ClientEventEmitter class.
     */
    public constructor() { }

    /**
     * Method for binding listeners to certain events.
     * @param event The event that should be listened to.
     * @param handler The Listener that should be called when the event occurs.
     * @public
     */
    public on<T extends EventsWithinClient["event"] | SocketsEventsFromServer["event"]>(event: T, handler: (data: DataByEvent<T, EventsWithinClient | SocketsEventsFromServer>["data"]) => any) {
        // first check if there is not already an storage for the event
        if (!this.listeners[event]) {
            // then create a storage for it
            this.listeners[event] = [];
        }
        // now the listener can be pushed to the storage
        this.listeners[event].push(handler);
    }

    /**
     * Method for unbinding listeners from certain events.
     * @param event The event where a listener should be removed.
     * @param handler The Listener that should be removed from a specified event.
     * @public
     */
    public off<T extends EventsWithinClient["event"] | SocketsEventsFromServer["event"]>(event: T, handler: (data: DataByEvent<T, EventsWithinClient | SocketsEventsFromServer>["data"]) => any) {
        for (let i = 0; this.listeners[event].length; ++i) {
            const listener = this.listeners[event][i];
            if (listener === handler) {
                // splicing the listener out
                this.listeners[event].splice(i, 1);
                // going one iteration back because 1 listener got removed
                i--;
            }
        }
        // check if listener storage is now empty
        if (this.listeners[event].length === 0) {
            // delete the storage
            delete this.listeners[event];
        }
    }

    /**
     * Method for emitting events with data.
     * @param event The specified event.
     * @param data The data to be emitted.
     * @public
     */
    public emit<T extends EventsWithinClient | SocketsEventsFromServer>(event: T["event"], data: DataByEvent<T["event"], T>["data"]) {
        this.listeners[event].forEach(listener => {
            // call the listeners with the data
            listener(data);
        })
    }
} 