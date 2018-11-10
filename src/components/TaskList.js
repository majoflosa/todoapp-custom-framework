import hookElement from '../services/hookElement';
import Task from './Task';

export default class TaskList {
    constructor( hook ) {
        this.hook = hook;

        this.el = document.createElement('div');
        this.id = 'task-list';
        this.children = [Task];
        
        this.init();
    }

    init() {
        hookElement( this.el, this );
    }
}