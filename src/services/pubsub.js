class PubSub {
    constructor() {
        this.events = {};
    }

    // when listener is set, register handlers to invoke on emit
    on( eventName, eventHandler ) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push( eventHandler );
    }

    // loop through all registered handlers, and invoke them passing data
    emit( eventName, data ) {
        if ( !this.events[eventName] || this.events[eventName].length === 0 )
            return;
        
        this.events[eventName].forEach( eventHandler => eventHandler(data) );
    }
}

export default PubSub;