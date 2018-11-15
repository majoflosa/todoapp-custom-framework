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

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // event listeners
        this.data.pubsub.on( 'view changed', (newRoute) => this.updateView(newRoute) );
        this.data.pubsub.on( 'new task', (task) => this.addTask(task) );
        this.data.pubsub.on( 'task deleted', (taskId) => this.deleteTask(taskId) );

    }

    render( data = {} ) {
        this.el.innerHTML = '';
        this.children.forEach( Child => {
            new Child( this.el, data );
        });

        this.hook.appendChild( this.el );
    }


    updateView( route ) {
        switch( route.view ) {
            case 'active':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks.filter(task => task.status !== 'done'), 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;

            case 'unstarted':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks.filter(task => task.status === 'unstarted'), 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;

            case 'ongoing':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks.filter(task => task.status === 'ongoing'), 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;

            case 'revising':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks.filter(task => task.status === 'revising'), 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;

            case 'done':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks.filter(task => task.status === 'done'), 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;

            case 'details':
                this.children = [TaskDetails],
                this.render({
                    task: this.data.tasks.find( task => task.id === +route.parameters[0]),
                    pubsub: this.data.pubsub
                });
                break;
            
            case 'home':
            default:
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.data.tasks, 
                    taskIndex: this.data.taskIndex, 
                    pubsub: this.data.pubsub 
                });
                break;   
        }
    }

    addTask( task ) {
        this.data.tasks.push( task );
        this.data.taskIndex++;
        this.render({
            tasks: this.data.tasks, 
            taskIndex: this.data.taskIndex, 
            pubsub: this.data.pubsub 
        });
    }

    deleteTask( taskId ) {
        this.data.tasks = this.data.tasks.filter( task => task.id !== taskId );
        this.render({
            tasks: this.data.tasks, 
            taskIndex: this.data.taskIndex, 
            pubsub: this.data.pubsub 
        });
    }
}