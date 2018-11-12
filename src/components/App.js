import _t from 'underscore.template';

import NavBar from './NavBar';
import Body from './Body';

import dom from '../services/dom';
import PubSub from '../services/pubsub';

class App {
    constructor( hook ) {
        this.hook = hook;
        this.pubsub = new PubSub();

        this.el = dom('div', {className: 'content-wrap'});

        this.children = [NavBar, Body];

        this.render();
    }

    render() {
        this.children.forEach( Child => {
            new Child( this.el, {pubsub: this.pubsub} );
        });

        this.hook.appendChild( this.el );
    }
}

export default App;