type EventType = (...args: any[]) => void;
type EventsTableType = { [key: string]: EventType[] };
type SubscriberType = (entry: any) => void;

async function emitter(events: EventsTableType, eventName: string, args?: any[], subscribers?: SubscriberType[]): Promise<void> {
    const hasSubscribers = (subscribers !== undefined);
    const isEventWildcard = (eventName === '*');
    const argsPass = (args !== undefined) ? args : [];

    for (const eventKey in events) {
        if (!isEventWildcard && eventName !== eventKey) {
            continue;
        }

        for (const eventSubscriber of events[eventKey]) {
            if (hasSubscribers) {
                // @ts-ignore
                subscribers.forEach(subscriber => {
                    subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                });
            }

            await eventSubscriber(...argsPass);
        }
    }
}

export {
    EventType,
    EventsTableType,
    SubscriberType,
    emitter as default,
};
