import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

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
        this.data.taskIndex = this.data.tasks.length;

        this.render({
            tasks: this.data.tasks, 
            taskIndex: this.data.taskIndex, 
            pubsub: this.data.pubsub 
        });

        // this.bindEvents();

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // event listeners
        this.data.pubsub.on( 'view changed', (newRoute) => this.updateView(newRoute) );
        this.data.pubsub.on( 'new task', (task) => this.addTask(task) );
        this.data.pubsub.on( 'task deleted', (taskId) => this.deleteTask(taskId) );

        // this.updateView( {view: 'home'} );
    }

    // bindEvents() {
    //     this.el.addEventListener( 'popstate', (e) => console.log('popstate: ', e) );
    // }

    render( data = {} ) {
        this.el.innerHTML = '';
        this.children.forEach( Child => {
            new Child( this.el, data );
        });

        this.hook.appendChild( this.el );
    }


    updateView( route ) {
        console.log( 'updating view: ', route.view );
        if ( route.view === 'details' ) {
            this.children = [TaskDetails];
            this.render({ 
                task: this.data.tasks.find( task => task.id === +route.parameters[0]),
                pubsub: this.data.pubsub
            });
        } else {
            this.children = [TaskForm, TaskList];
            this.render({
                tasks: this.data.tasks, 
                taskIndex: this.data.taskIndex, 
                pubsub: this.data.pubsub 
            });
        }
    }

    addTask( task ) {
        this.data.tasks.push( task );
        this.data.taskIndex++;
        this.render();
    }

    deleteTask( taskId ) {
        this.data.tasks = this.data.tasks.filter( task => task.id !== taskId );
        this.render();
    }
}