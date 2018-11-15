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
        this.data.window.addEventListener('popstate', (e) => this.handlePopstate(e) );
    }

    setRoute( href, fromPopstate = false ) {
        if ( !fromPopstate ) this.data.window.history.pushState({}, '', href);

        let currentRoute = {};
        
        let hashParts = href.split('#/');
        hashParts.shift();
        hashParts = hashParts[0].split('/');
        
        currentRoute.view = hashParts[0] || 'home';
        currentRoute.parameters = hashParts.filter( (part, index) => index !== 0 );
        
        this.data.pubsub.emit('view changed', currentRoute );
        
        return currentRoute;
    }

    handlePopstate(event) {
        this.setRoute(event.path[0].location.href, true);
    }

    getCurrentRoute() {
        return this.location.hash;
    }
}