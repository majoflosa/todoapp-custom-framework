// import _t from 'underscore.template';
// import navbarTemplate from '../templates/navbarTemplate.html';
import NavBarDomTree from '../domTrees/navBarDomTree';

class NavBar {
    constructor( hook ) {
        this.hook = hook;
        
        // this.el = document.createElement('div');
        // this.id = 'header';
        // this.template = _t( navbarTemplate );
        this.el = NavBarDomTree();

        this.render();
    }
    
    render() {
        // this.el.id = this.id;
        // this.el.innerHTML = this.template();

        this.hook.appendChild( this.el );
    }
}

export default NavBar;