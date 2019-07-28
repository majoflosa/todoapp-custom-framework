import Base from './Base';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import dom from '../services/dom';

export default class TasksAll extends Base {
    constructor( data ) {
        super( data );

        this.el = dom('div', {id: 'task-list-all', class: 'view view-tasks-all'});
        this.children = [TaskForm, TaskList];

        this.getTasksList = this.getTasksList.bind( this );
        this.getTasksList();
    }

    getTasksList() {
        this.el.innerHTML = '<p style="text-align: center;">Loading tasks...</p>';

        this.http.get( `${this.http.baseUrl}/tasks` )
            .then( data => this.render(data) )
            .catch( err => console.log(err) );
    }

    render( tasks ) {
        this.el.innerHTML = '';
        this.children.forEach( Child => new Child({ hook: this.el, tasks }) );

        this.hook.appendChild( this.el );
    }
}