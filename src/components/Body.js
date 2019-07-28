import Base from './Base';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

import dom from '../services/dom';

export default class Body extends Base {
    constructor( data ) {
        super( data );

        // this.hook = hook;
        // this.data = data;

        this.el = dom('main', {id: 'body'});
        
        // child component(s)
        this.children = [TaskForm];

        // binding event handlers' context
        this.updateView = this.updateView.bind( this );
        this.addTask = this.addTask.bind( this );
        this.deleteTask = this.deleteTask.bind( this );

        // this.render();

        this.pubsub.on( 'view changed', (path) => this.updateView(path) );
    }

    render( View ) {
        this.el.innerHTML = '';

        new View({ hook: this.el });

        this.hook.appendChild( this.el );
    }

    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //  Begin Event handlers
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    updateView( path ) {
        const View = this.router.getRouteView( `/${path.view}` );
        // console.log( 'path: ', path );
        // console.log( 'View: ', View );
        this.render( View );
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