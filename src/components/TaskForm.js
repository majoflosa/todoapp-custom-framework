import TaskFormDomTree from '../domTrees/taskFormDomTree';
import Base from './Base';

export default class TaskForm extends Base {
    constructor( data = {} ) {
        super( data );

        this.el = TaskFormDomTree();
        
        this.render();
        
        this.cacheDOM();
        this.bindEvents();
        
        // binding event handlers' context
        this.submitForm = this.submitForm.bind( this );
    }

    cacheDOM() {
        this.DOM = {
            taskInput: this.el.querySelector('#task-input'),
            taskButton: this.el.querySelector('#create-task')
        };
    }
    
    bindEvents() {
        this.DOM.taskButton.addEventListener('click', (e) => this.submitForm(e) );
        this.DOM.taskInput.addEventListener('keypress', (e) => this.submitForm(e) );
    }
    
    render() {
        this.hook.appendChild( this.el );
    }


    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    //  Begin Event handlers
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    submitForm( e ) {
        // ignore all keypress except ENTER
        if ( e.type === 'keypress' && e.which !== 13 ) return false;
        
        // send new task's data to 'global' event handler
        this.data.pubsub.emit('new task', {
            id: this.data.taskIndex + 1,
            title: this.DOM.taskInput.value,
            status: 'unstarted',
            description: 'no description'
        });

        // clear field after submitting
        this.DOM.taskInput.value = '';
    }
}