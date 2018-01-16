declare type MutatorType = (state: any, next: MutatorType) => any | Promise<any>;
declare type SubscriberType = (entry: any) => void;
declare function dispatcher(state: any, mutators: MutatorType[], subscribers?: SubscriberType[]): Promise<any>;
export { MutatorType, SubscriberType, dispatcher as default };