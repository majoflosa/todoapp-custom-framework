import TaskFormDomTree from '../domTrees/taskFormDomTree';

export default class TaskForm {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = TaskFormDomTree();
        
        this.render();
        
        this.cacheDOM();
        this.bindEvents();
        
        // adding event listeners

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
        if ( e.type === 'keypress' && e.which !== 13 ) return false;
        
        let { pubsub } = this.data;
        pubsub.emit('new task', {
            title: this.DOM.taskInput.value,
            status: 'unstarted',
            description: 'no description'
        });
        this.DOM.taskInput.value = '';
    }
}