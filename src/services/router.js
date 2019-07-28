import Base from '../components/Base';

export default class Router extends Base {
    constructor( data = {} ) {
        super();

        // initial router properties
        // this.pubsub = data.pubsub;

        // bind methods' context to current instance
        this.setRoute = this.setRoute.bind( this );
        this.handlePopstate = this.handlePopstate.bind( this );

        // set initial route for currently loaded view
        this.setRoute( window.location.href );
        // bind handlers to their listeners
        this.bindEvents();

        // listen for changes in routes
        this.pubsub.on( 'route changed', (href) => this.setRoute(href) );
    }

    bindEvents() {
        // handle click on browser's Back and Forward
        window.addEventListener('popstate', (e) => this.handlePopstate(e) );
    }

    // mapRoutes( map ) {
    //     this.routes = map;
    // }

    setRoute( href, fromPopstate = false ) {
        if ( !fromPopstate ) window.history.pushState({}, '', href);

        // turn url to array of parts after hash
        let hashParts = href.split('#/');
        hashParts.shift();
        hashParts = hashParts[0].split('/');
        
        // build route information from hash parts
        let currentRoute = {};
        currentRoute.view = hashParts[0] || 'home';
        currentRoute.parameters = hashParts.filter( (part, index) => index !== 0 );
        
        // invoke handler that controls view rendering (Body.updateView)
        this.pubsub.emit('view changed', currentRoute );
        
        return currentRoute;
    }

    handlePopstate(event) {
        // keep view controller synced on browser's Back and Forward click
        this.setRoute(event.path[0].location.href, true);
    }

    getCurrentRoute() {
        return window.location.hash;
    }
}