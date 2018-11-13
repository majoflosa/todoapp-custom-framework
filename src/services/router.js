export default class Router {
    constructor( data = {} ) {
        this.data = data;
        this.location = this.data.location;

        this.setRoute = this.setRoute.bind( this );
        this.setRoute( this.location.href );

        this.data.pubsub.on( 'route changed', (href) => this.setRoute(href) );
    }

    setRoute( href ) {
        this.location.href = href;

        let currentRoute = {};
        
        let hashParts = href.split('#/');
        hashParts.shift();
        hashParts = hashParts[0].split('/');
        
        currentRoute.view = hashParts[0] || 'home';
        currentRoute.parameters = hashParts.filter( (part, index) => index !== 0 );
        
        this.data.pubsub.emit('view changed', currentRoute );
        
        return currentRoute;
    }
}