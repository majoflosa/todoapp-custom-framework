import _t from 'underscore.template';

import taskCreatorTemplate from '../templates/taskCreatorTemplate.html';

import hookElement from '../services/hookElement';

export default class TaskForm {
    constructor( hook ) {
        this.hook = hook;

        this.el = document.createElement('div');
        this.id = 'task-creator';
        this.template = _t( taskCreatorTemplate );

        this.init();
    }

    init() {
        hookElement( this.el, this);
        this.render();
    }

    render() {
    }
}