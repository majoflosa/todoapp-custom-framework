import _t from 'underscore.template';
import wrapperTemplate from '../templates/wrapperTemplate.html';

import NavBar from './NavBar';

class App {
    constructor() {
        this.hook = document.getElementById('app');
        this.template = _t( wrapperTemplate );

        this.component = {
            el: document.createElement('div'),
            className: 'content-wrap',
            children: [new NavBar()]
        };

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        let $app = this.component.el;

        if ( this.component.className ) $app.className = this.component.className;
        if ( this.component.id ) $app.id = this.component.id;

        this.component.children.forEach( child => {
            $app.appendChild( child.render() );
        });

        this.hook.appendChild( $app );
    }
}

export default App;