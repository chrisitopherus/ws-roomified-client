import { AbstractClientEventEmitter } from "./emitter.js";
import { ClientEvents, SocketEvents, DataByEvent, SocketURL } from "./types/socket.js";

/**
 * Abstract class for a Client that implements all necessary methods and properties.
 * @abstract
 * @class
 */
export abstract class AbstractClient<EventsFromClient extends SocketEvents = any, EventsFromServer extends SocketEvents = any, EventsWithinClient extends ClientEvents = any> {

    /**
     * The socket connection.
     * @private
     */
    private _socket: WebSocket;

    /**
     * Getter for reading the socket instance.
     * @public
     */
    public get socket(): WebSocket {
        return this._socket;
    };

    /**
     * EventEmitter instance used for handling the incoming socket events and events within the client.
     * @public
     */
    public emitter: AbstractClientEventEmitter<EventsFromServer, EventsWithinClient>;

    /**
     * Constructor of the abstract Client class.
     * @param url URL for the socket connection.
     * @param emitter EventEmitter instance used for handling the incoming socket events and events within the client.
     * @public
     */
    public constructor(url: SocketURL, emitter: AbstractClientEventEmitter<EventsFromServer, EventsWithinClient>) {
        // saving the socket connection.
        this._socket = new WebSocket(url);

        // saving emitter
        this.emitter = emitter;

        // handling incoming socket messages
        this.socket.addEventListener("message", this.receiveMessage);
    }

    /**
     * Method that sends socket messages to the server.
     * @param event The event.
     * @param data The data accordingly to the event.
     * @public
     */
    public sendMessage<T extends EventsFromClient["event"]>(event: T, data: DataByEvent<T, EventsFromClient>) {
        // sending the data
        this.socket.send(JSON.stringify({
            event,
            data
        }));
    }

    /**
     * Method for receiving a socket message from the server.
     * @param msg The socket message.
     * @private
     */
    private receiveMessage = <T extends EventsFromServer["data"]>(msg: MessageEvent<T>) => {
        const data = JSON.parse(msg.data) as EventsFromServer;

        this.emitter.emit(data.event, data.data);
    }
}