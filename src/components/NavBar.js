import _t from 'underscore.template';
import navbarTemplate from '../templates/navbarTemplate.html';

import hookElement from '../services/hookElement';

class NavBar {
    constructor( hook ) {
        this.hook = hook;
        
        this.el = document.createElement('div');
        this.id = 'header';
        this.template = _t( navbarTemplate );

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        hookElement( this.el, this );
    }
}

export default NavBar;