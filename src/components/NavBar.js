import NavBarDomTree from '../domTrees/navBarDomTree';

class NavBar {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;
        
        this.el = NavBarDomTree();

        this.render();

        this.cacheDOM();
        this.bindEvents();

        // binding event handlers' context
        this.handleClickNavLink = this.handleClickNavLink.bind( this );
    }

    cacheDOM() {
        this.DOM = {
            navLink: this.el.querySelectorAll('#site-nav a')
        };
    }

    bindEvents() {
        let navLinks = [...this.DOM.navLink];
        navLinks.forEach( link => {
            link.addEventListener('click', (e) => this.handleClickNavLink(e)) 
        });
    }
    
    render() {
        this.hook.appendChild( this.el );
    }


    handleClickNavLink( event ) {
        let {pubsub} = this.data;
        pubsub.emit('route changed', event.target.href);
    }
}

export default NavBar;