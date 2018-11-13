import Task from './Task';
import dom from '../services/dom';

export default class TaskList {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('div', {id: 'task-list'});

        this.child = Task;
        
        this.render( this.data.tasks );

        // event listeners
    }
    
    render( data = {} ) {
        if ( !this.data.tasks || this.data.tasks.length === 0 ) {
            this.el.innerHTML = '<p style="text-align: center;">There are currently no tasks.</p>';
            this.hook.appendChild( this.el );
            return;
        }

        this.el.innerHTML = '';
        data.forEach( task => new this.child(this.el, {
            task: task,
            pubsub: this.data.pubsub
        }) );
        
        this.hook.appendChild( this.el );
    }
}