import NavBarDomTree from '../domTrees/navBarDomTree';

class NavBar {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;
        
        this.el = NavBarDomTree();

        this.render();
    }
    
    render() {
        this.hook.appendChild( this.el );
    }
}

export default NavBar;