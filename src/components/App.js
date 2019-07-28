import NavBar from './NavBar';
import Body from './Body';

import dom from '../services/dom';
// import PubSub from '../services/pubsub';
import Router from '../services/router';
// import Http from '../services/http';

class App {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data
        // this.pubsub = new PubSub();
        // this.http = new Http();

        // initiating the router
        window.location += window.location.hash ? '' : '#/';
        this.router = new Router({
            // pubsub: this.pubsub
        });

        // preparing information to render
        this.el = dom('div', {className: 'content-wrap'});
        this.children = [NavBar, Body];

        this.render();
    }

    render() {
        this.children.forEach( Child => new Child(this.el) );

        this.hook.appendChild( this.el );
    }
}

export default App;