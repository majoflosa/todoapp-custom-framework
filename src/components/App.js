import NavBar from './NavBar';
import Body from './Body';

import dom from '../services/dom';
import PubSub from '../services/pubsub';
import Router from '../services/router';

class App {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data
        this.pubsub = new PubSub();

        // initiating the router
        this.data.window.location += this.data.window.location.hash ? '' : '#/';
        this.router = new Router({
            window: this.data.window,
            location: this.data.window.location,
            pubsub: this.pubsub
        });

        // preparing information to render
        this.el = dom('div', {className: 'content-wrap'});
        this.children = [NavBar, Body];

        this.render();
    }

    render() {
        this.children.forEach( Child => new Child( this.el, {
            pubsub: this.pubsub,
            router: this.router
        } ) );

        this.hook.appendChild( this.el );
    }
}

export default App;