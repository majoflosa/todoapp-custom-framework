import Task from './Task';
import dom from '../services/dom';

export default class TaskList {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('div', {id: 'task-list'});

        // fetch initial data
        this.data.tasks = [
            {id: 1, title: 'Do a thing', status: 'ongoing', description: 'Descriptive description here.'},
            {id: 2, title: 'Do a second thing', status: 'revising', description: 'Descriptive description here.'},
            {id: 3, title: 'Do another thing', status: 'done', description: 'Descriptive description here.'}
        ];

        this.child = Task;
        
        this.render( this.data.tasks );

        // event listeners
        this.data.pubsub.on('new task', (data) => this.handleNewTask(data) );
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

    handleNewTask( data ) {
        // on 'new task' 
        this.data.tasks.push( data );
        this.render( this.data.tasks );
    }
}