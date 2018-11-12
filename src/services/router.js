export default class Router {
    constructor( location ) {
        this.location = location;

        this.hash = this.location.hash || '#/';

        let hashParts = this.hash.split('/');
        hashParts.shift();

        this.currentView = hashParts[0] || 'home';
        this.parameters = hashParts[1] ? hashParts.splice(1, hashParts.length - 1) : null;

        console.log( 'this.currentView: ', this.currentView );
        console.log( 'this.parameters: ', this.parameters );
    }

    getCurrentView() {
        return this.currentView;
    }
}