import TaskForm from './TaskForm';
import TaskList from './TaskList';
import dom from '../services/dom';

export default class Body {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = dom({
            element: 'main',
            id: 'body'
        });

        this.children = [TaskForm, TaskList];

        this.init();
    }

    init() {
        this.render();
    }
    
    render() {
        this.children.forEach( Child => {
            new Child( this.el, {pubsub: this.data.pubsub } );
        });

        this.hook.appendChild( this.el );
    }
}