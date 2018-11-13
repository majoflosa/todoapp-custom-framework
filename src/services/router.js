export default class Router {
    constructor( data = {} ) {
        this.data = data;
        this.location = this.data.location;

        this.setCurrentRoute = this.setCurrentRoute.bind( this );
        this.setCurrentRoute( this.location.href );

        this.data.pubsub.on( 'route changed', (href) => this.setCurrentRoute(href) );
    }

    setCurrentRoute( href ) {
        let currentRoute = {};

        let hashParts = href.split('#/');
            hashParts.shift();
            hashParts = hashParts[0].split('/');

        currentRoute.view = hashParts[0] || 'home';
        currentRoute.parameters = hashParts.filter( (part, index) => index !== 0 );
        
        // console.log( currentRoute )
        this.data.pubsub.emit('view changed', currentRoute);
        
        return currentRoute;
    }

    handleRouteChanged( ) {

    }
}