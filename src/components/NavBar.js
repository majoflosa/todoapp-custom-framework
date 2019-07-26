import Base from './Base';
import NavBarDomTree from '../domTrees/navBarDomTree';

class NavBar extends Base {
    constructor( hook, data = {} ) {
        super();

        this.hook = hook;
        // this.data = data;
        
        this.el = NavBarDomTree();

        this.cacheDOM();
        this.bindEvents();
        
        this.render();

        // binding event handlers' context
        this.handleClickNavLink = this.handleClickNavLink.bind( this );
    }

    cacheDOM() {
        this.DOM = { navLinks: [...this.el.querySelectorAll('#site-nav a')] };
    }

    bindEvents() {
        this.DOM.navLinks.forEach( link => {
            link.addEventListener('click', (e) => this.handleClickNavLink(e)) 
        });
    }
    
    render() {
        this.hook.appendChild( this.el );

        this.DOM.navLinks.forEach( $link => {
            if ( $link.attributes.href.value === this.router.getCurrentRoute() ) {
                $link.classList.add('current');
            }
        });
    }


    handleClickNavLink( event ) {
        event.preventDefault();
        
        this.pubsub.emit('route changed', event.target.href);

        // updating css class for selected link
        this.DOM.navLinks.forEach( link => link.classList.remove('current') );
        event.target.classList.add('current');
    }
}

export default NavBar;