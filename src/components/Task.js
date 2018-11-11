import _t from 'underscore.template';
import taskTemplate from '../templates/taskTemplate.html';

export default class Task {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = document.createElement('article');
        this.el.className = 'task-wrap';
        this.template = _t( taskTemplate );

        // fetch initial data
        // this.data.whatever = fetchedData;

        this.render( this.data );

        this.handleNewTask = this.handleNewTask.bind( this );
    }

    render( data = {} ) {
        this.el.innerHTML = this.template( data );

        this.hook.appendChild( this.el );
    }

    handleNewTask( data ) {
        this.render( data );
    }
}