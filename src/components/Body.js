import hookElement from '../services/hookElement';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default class Body {
    constructor( hook ) {
        this.hook = hook;
        this.el = document.createElement('main');
        this.id = 'body';
        this.children = [TaskForm, TaskList];

        this.init();
    }

    init() {
        hookElement( this.el, this );
        this.render();
    }

    render() {
    }
}