import _t from 'underscore.template';
import navbarTemplate from '../templates/navbarTemplate.html';

class NavBar {
    constructor() {
        this.template = _t( navbarTemplate );
        // this.init();
    }

    init() {
        this.render();
    }

    render() {
        let $navbar = document.createElement('div');
        $navbar.innerHTML = this.template();

        return $navbar;
    }
}

export default NavBar;