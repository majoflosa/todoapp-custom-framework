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
        this.DOM = { navLink: this.el.querySelectorAll('#site-nav a') };
    }

    bindEvents() {
        let navLinks = [...this.DOM.navLink];
        navLinks.forEach( link => {
            link.addEventListener('click', (e) => this.handleClickNavLink(e)) 
        });
    }
    
    render() {
        let { router } = this.data;

        this.hook.appendChild( this.el );
        
        if ( this.el.querySelector(`#site-nav a[href="${router.getCurrentRoute()}"]`) ) {
            this.el.querySelector(`#site-nav a[href="${router.getCurrentRoute()}"]`)
                .classList.add('current');
        }
    }


    handleClickNavLink( event ) {
        event.preventDefault();
        
        this.data.pubsub.emit('route changed', event.target.href);

        // updating css class for selected link
        let navLinks = [...this.DOM.navLink];
        navLinks.forEach( link => link.classList.remove('current') );
        event.target.classList.add('current');
    }
}

export default NavBar;