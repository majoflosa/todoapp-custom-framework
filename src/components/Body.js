import Base from './Base';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

import dom from '../services/dom';

export default class Body extends Base {
    constructor( hook ) {
        super();

        this.hook = hook;
        // this.data = data;

        this.el = dom('main', {id: 'body'});
        
        // child component(s)
        this.children = [TaskForm, TaskList];

        // this.fetchInitialData();

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // event listeners
        // this.pubsub.on( 'view changed', (newRoute) => this.updateView(newRoute) );
        // this.pubsub.on( 'new task', (task) => this.addTask(task) );
        // this.pubsub.on( 'task deleted', (taskId) => this.deleteTask(taskId) );

        this.render();
    }

    fetchInitialData() {
        // this.http.get( `${this.http.baseUrl}/tasks` ).then( data => {
        //     console.log( data );
        //     this.tasks = data;
        //     this.taskIndex = this.tasks.length;
        // }).catch(err => console.log(err) );
    }

    render() {
        this.el.innerHTML = '';
        this.children.forEach( Child => new Child(this.el) );

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
                    tasks: this.tasks.filter(task => task.status !== 'done'), 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;

            case 'unstarted':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.tasks.filter(task => task.status === 'unstarted'), 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;

            case 'ongoing':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.tasks.filter(task => task.status === 'ongoing'), 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;

            case 'revising':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.tasks.filter(task => task.status === 'revising'), 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;

            case 'done':
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.tasks.filter(task => task.status === 'done'), 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;

            case 'details':
                this.children = [TaskDetails],
                this.render({
                    task: this.tasks.find( task => task.id === +route.parameters[0]),
                    pubsub: this.pubsub
                });
                break;
            
            case 'home':
            default:
                this.children = [TaskForm, TaskList],
                this.render({
                    tasks: this.tasks, 
                    taskIndex: this.taskIndex, 
                    pubsub: this.pubsub 
                });
                break;   
        }
    }

    addTask( task ) {
        this.http.post( `${this.http.baseUrl}/tasks`, {
            user_id: 1,
            title: task.title,
            status: 'unstarted',
            description: ''
        }).then( task => {
            console.log( task );
        }).catch( err => console.log( err ) );
    }

    deleteTask( taskId ) {
        this.tasks = this.data.tasks.filter( task => task.id !== taskId );
        this.render({
            tasks: this.tasks, 
            taskIndex: this.taskIndex, 
            pubsub: this.pubsub 
        });
    }
}