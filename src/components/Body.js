import TaskForm from './TaskForm';
import TaskList from './TaskList';
import dom from '../services/dom';

export default class Body {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('main', {id: 'body'});

        this.children = [TaskForm, TaskList];

        this.render();

        // event listeners
        this.data.pubsub.on('route changed', this.handleRouteChange );

        // binding event handlers' context
        this.handleRouteChange = this.handleRouteChange.bind( this );
    }

    render() {
        this.children.forEach( Child => {
            new Child( this.el, {pubsub: this.data.pubsub } );
        });

        this.hook.appendChild( this.el );
    }


    handleRouteChange( route ) {
        console.log( 'route: ', route );
    }
}