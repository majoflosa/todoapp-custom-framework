import TaskDomTree from '../domTrees/taskDomTree';
import Base from './Base';

export default class Task extends Base {
    constructor( data = {} ) {
        super( data );
        // this.hook = hook;
        // this.data = data;
        this.el = TaskDomTree( this.task );
        
        this.render();

        this.cacheDOM();
        this.bindEvents();

        // bind event handlers' context
        this.handleClickDetails = this.handleClickDetails.bind( this );
        this.handleDeleteTask = this.handleDeleteTask.bind( this );
    }

    cacheDOM() {
        this.DOM = {
            $details: this.el.querySelector('.task-details'),
            $deleteTask: this.el.querySelector('.delete-task')
        };
    }

    bindEvents() {
        this.DOM.$details.addEventListener( 'click', (e) => this.handleClickDetails(e) );
        this.DOM.$deleteTask.addEventListener( 'click', (e) => this.handleDeleteTask(e) );
    }

    render() {
        this.hook.appendChild( this.el );
    }

    handleClickDetails( event ) {
        event.preventDefault();
        this.pubsub.emit('route changed', event.target.href );
    }

    handleDeleteTask( event ) {
        event.preventDefault();
        this.pubsub.emit('task deleted', this.task.id );
    }
}