import _t from 'underscore.template';
import taskTemplate from '../templates/taskTemplate.html';

import hookElement from '../services/hookElement';

export default class Task {
    constructor( hook ) {
        this.hook = hook;

        this.el = document.createElement('article');
        this.className = 'task-wrap';
        this.template = _t( taskTemplate );

        this.init();
    }

    init() {
        hookElement( this.el, this );
    }
}