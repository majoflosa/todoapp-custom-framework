import _t from 'underscore.template';
// import wrapperTemplate from '../templates/wrapperTemplate.html';

import hookElement from '../services/hookElement';

import NavBar from './NavBar';
import Body from './Body';

class App {
    constructor( hook ) {
        this.hook = hook;

        this.el = document.createElement('div');
        this.className = 'content-wrap';
        this.children = [NavBar, Body];

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        hookElement( this.el, this );
    }
}

export default App;