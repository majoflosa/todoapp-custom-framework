import Task from './Task';
import Base from './Base';

import dom from '../services/dom';

export default class TaskList extends Base {
    constructor( hook ) {
        super();
        console.log( 'task list created')

        this.hook = hook;
        
        this.getTasksList = this.getTasksList.bind( this );

        this.el = dom('div', {id: 'task-list'});

        // child component(s)
        this.child = Task;
        
        this.render([]);
        this.getTasksList();

        // this.pubsub.on( 'task list updated', (tasks) => this.render(tasks) );
    }

    getTasksList() {
        this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';

        this.http.get( `${this.http.baseUrl}/tasks` ).then( data => {
            console.log( data );
            this.render( data );
            // this.tasks = data;
            // this.taskIndex = this.tasks.length;
        }).catch(err => console.log(err) );
    }
    
    render( tasks ) {
        if ( !tasks || tasks.length === 0 ) {
            // current view has no tasks to display
            this.el.innerHTML = '<p style="text-align: center;">There are currently no tasks.</p>';
            this.hook.appendChild( this.el );
            return;
        }

        this.el.innerHTML = '';
        // this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';
        tasks.forEach( task => new this.child(this.el, {
            task: task,
            pubsub: this.pubsub
        }) );
        
        this.hook.appendChild( this.el );
    }
}