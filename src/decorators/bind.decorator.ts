/**
 * Decorator that binds the this so it can be used as an event handler.
 * @param _ Not used.
 * @param _2 Not used.
 * @param descriptor Descriptor.
 */
export const Bind = (_: any, _2: string | symbol, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};