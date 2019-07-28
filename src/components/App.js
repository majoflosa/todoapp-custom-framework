import NavBar from './NavBar';
import Body from './Body';

import dom from '../services/dom';
import Router from '../services/router';
import routesMap from '../services/routesMap';

class App {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        // initiating the router
        window.location += window.location.hash ? '' : '#/';
        this.router = new Router( routesMap );

        // preparing information to render
        this.el = dom('div', {className: 'content-wrap'});
        this.children = [NavBar, Body];

        this.render();
    }

    render() {
        this.children.forEach( Child => new Child({ hook: this.el, router: this.router }) );

        this.hook.appendChild( this.el );
    }
}

export default App;