import Task from './Task';
import Base from './Base';

import dom from '../services/dom';

export default class TaskList extends Base {
    constructor( data ) {
        super( data );
        
        // this.getTasksList = this.getTasksList.bind( this );

        this.el = dom('div', {id: 'task-list'});

        // child component(s)
        this.child = Task;
        
        this.render( this.tasks );
        // this.getTasksList();
    }

    // getTasksList() {
    //     this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';

    //     this.http.get( `${this.http.baseUrl}/tasks` )
    //         .then( data => this.render(data) )
    //         .catch( err => console.log(err) );
    // }
    
    render( tasks ) {
        if ( !tasks || tasks.length === 0 ) {
            // current view has no tasks to display
            this.el.innerHTML = '<p style="text-align: center;">There are currently no tasks.</p>';
            this.hook.appendChild( this.el );
            return;
        }

        this.el.innerHTML = '';
        // this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';
        tasks.forEach( task => new this.child({ hook: this.el, task: task }) );
        
        this.hook.appendChild( this.el );
    }
}