import Task from './Task';
import dom from '../services/dom';

export default class TaskList {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('div', {id: 'task-list'});

        // fetch initial data
        this.data.tasks = [
            {title: 'Do a thing', status: 'ongoing', description: 'Descriptive description here.'},
            {title: 'Do a second thing', status: 'revising', description: 'Descriptive description here.'},
            {title: 'Do another thing', status: 'done', description: 'Descriptive description here.'}
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
        data.forEach( task => new this.child(this.el, task) );
        
        this.hook.appendChild( this.el );
    }

    handleNewTask( data ) {
        // on 'new task' 
        this.data.tasks.push( data );
        this.render( this.data.tasks );
    }
}