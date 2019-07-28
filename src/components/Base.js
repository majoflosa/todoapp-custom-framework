import Http from '../services/http';
import PubSub from '../services/pubsub';

const http = new Http();
const pubsub = new PubSub();

export default class Base {
    constructor( data = {} ) {
        this.http = http;
        this.pubsub = pubsub;
        
        for ( let prop in data ) {
            this[prop] = data[prop];
        }
    }
}