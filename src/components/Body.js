import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

import dom from '../services/dom';

export default class Body {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = dom('main', {id: 'body'});
        
        // child component(s)
        this.children = [TaskForm, TaskList];

        this.fetchInitialData();

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // event listeners
        this.data.pubsub.on( 'view changed', (newRoute) => this.updateView(newRoute) );
        this.data.pubsub.on( 'new task', (task) => this.addTask(task) );
        this.data.pubsub.on( 'task deleted', (taskId) => this.deleteTask(taskId) );

    }

    fetchInitialData() {
        this.data.http.get( `${this.data.http.baseUrl}/tasks` ).then( data => {
            console.log( data );
            this.data.tasks = data;
            this.data.taskIndex = this.data.tasks.length;
        }).catch(err => console.log(err) );

    }

    render( data = {} ) {
        this.el.innerHTML = '';
        this.children.forEach( Child => {
            new Child( this.el, data );
        });

        this.hook.appendChild( this.el );
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //  Begin Event handlers
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
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
        this.data.http.post( `${this.data.http.baseUrl}/tasks`, {
            user_id: 1,
            title: task.title,
            status: 'unstarted',
            description: ''
        }).then( task => {
            console.log( task );
        }).catch( err => console.log( err ) );
        // this.data.tasks.push( task );
        // this.data.taskIndex++;
        // this.render({
        //     tasks: this.data.tasks, 
        //     taskIndex: this.data.taskIndex, 
        //     pubsub: this.data.pubsub 
        // });
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