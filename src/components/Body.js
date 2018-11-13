import TaskForm from './TaskForm';
import TaskList from './TaskList';
import dom from '../services/dom';

export default class Body {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('main', {id: 'body'});
        this.children = [TaskForm, TaskList];

        // fetch initial data
        this.data.tasks = [
            {id: 1, title: 'Do a thing', status: 'ongoing', description: 'Descriptive description here.'},
            {id: 2, title: 'Do a second thing', status: 'revising', description: 'Descriptive description here.'},
            {id: 3, title: 'Do another thing', status: 'done', description: 'Descriptive description here.'}
        ];

        this.render();

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // event listeners
        this.data.pubsub.on( 'view changed', (newRoute) => this.updateView(newRoute) );
        this.data.pubsub.on( 'new task', (task) => this.addTask(task) );
        this.data.pubsub.on( 'task deleted', (taskId) => this.deleteTask(taskId) );

    }

    render() {
        this.el.innerHTML = '';
        this.children.forEach( Child => {
            new Child( this.el, {tasks: this.data.tasks, pubsub: this.data.pubsub } );
        });

        this.hook.appendChild( this.el );
    }


    updateView( route ) {
        console.log( 'updating view: ', route.view );
    }

    addTask( task ) {
        this.data.tasks.push( task );
        this.render();
    }

    deleteTask( taskId ) {
        this.data.tasks = this.data.tasks.filter( task => task.id !== taskId );
        this.render();
    }
}