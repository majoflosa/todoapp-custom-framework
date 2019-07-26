import Http from '../services/http';
import Router from '../services/router';
import PubSub from '../services/pubsub';

const http = new Http();
const pubsub = new PubSub();
const router = new Router({ pubsub });

export default class Base {
    constructor() {
        this.http = http;
        this.pubsub = pubsub;
        this.router = router;
    }

    init() {

    }
}