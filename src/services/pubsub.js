class PubSub {
    constructor() {
        this.events = {};
    }

    on( eventName, eventHandler ) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push( eventHandler );
    }

    emit( eventName, data ) {
        this.events[eventName].forEach( eventHandler => eventHandler(data) );
    }
}

export default PubSub;