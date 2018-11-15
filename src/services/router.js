export default class Router {
    constructor( data = {} ) {
        this.data = data;
        this.location = this.data.location;

        this.setRoute = this.setRoute.bind( this );
        this.setRoute( this.location.href );

        this.bindEvents();

        this.handlePopstate = this.handlePopstate.bind( this );

        this.data.pubsub.on( 'route changed', (href) => this.setRoute(href) );
    }

    bindEvents() {
        // handle click on browser's Back and Forward
        this.data.window.addEventListener('popstate', (e) => this.handlePopstate(e) );
    }

    setRoute( href, fromPopstate = false ) {
        if ( !fromPopstate ) this.data.window.history.pushState({}, '', href);

        // turn url to array of parts after hash
        let hashParts = href.split('#/');
        hashParts.shift();
        hashParts = hashParts[0].split('/');
        
        // build route information from hash parts
        let currentRoute = {};
        currentRoute.view = hashParts[0] || 'home';
        currentRoute.parameters = hashParts.filter( (part, index) => index !== 0 );
        
        // invoke handler that controls view rendering (Body.updateView)
        this.data.pubsub.emit('view changed', currentRoute );
        
        return currentRoute;
    }

    handlePopstate(event) {
        // keep view controller synced on browser's Back and Forward click
        this.setRoute(event.path[0].location.href, true);
    }

    getCurrentRoute() {
        return this.location.hash;
    }
}