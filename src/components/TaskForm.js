import _t from 'underscore.template';

import taskCreatorTemplate from '../templates/taskCreatorTemplate.html';

export default class TaskForm {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;

        this.el = document.createElement('div');
        this.el.id = 'task-creator';
        this.template = _t( taskCreatorTemplate );

        this.submitForm = this.submitForm.bind( this );

        this.render();

        this.cacheDOM();
        this.bindEvents();

        // event listeners
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
        this.el.innerHTML = this.template();

        this.hook.appendChild( this.el );
    }


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