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

        // binding event handlers' context
        this.handleRouteChange = this.handleRouteChange.bind( this );

        // event listeners
        // this.data.pubsub.on('route changed', this.handleRouteChange );

    }

    render() {
        this.children.forEach( Child => {
            new Child( this.el, {pubsub: this.data.pubsub } );
        });

        this.hook.appendChild( this.el );
    }


    handleRouteChange( route ) {
        console.log( this.data.router.getCurrentRoute() );
    }
}