import Base from './Base';
import dom from '../services/dom';

export default class NotFound extends Base {
    constructor( data = {} ) {
        super( data );

        this.el = dom( 'div', {id: 'not-found', class: 'view view-not-found'} );
        this.render();
    }

    render() {
        this.el.innerHTML = '<p>Error 404: page not found.</p>';
        this.hook.appendChild( this.el );
    }
}