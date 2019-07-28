import Base from './Base';
import dom from '../services/dom';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default class TasksActive extends Base {
    constructor( data = {} ) {
        super( data );

        this.getTasksList = this.getTasksList.bind( this );

        this.el = dom( 'div', {id: 'task-list-active', class: 'view view-tasks-active'});
        this.children = [TaskForm, TaskList];

        this.getTasksList();
    }

    getTasksList() {
        this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';

        this.http.get( `${this.http.baseUrl}/tasks` )
            .then( tasks => {
                const activeTasks = tasks.filter( task => task.status !== 'done' );
                this.render( activeTasks );
            } )
            .catch( err => console.log(err) );
    }

    render( tasks ) {
        this.el.innerHTML = '';
        this.children.forEach( Child => new Child({ hook: this.el, tasks }) );

        this.hook.appendChild( this.el );
    }
}