import TaskDomTree from '../domTrees/taskDomTree';

export default class Task {
    constructor( hook, data = {} ) {
        this.hook = hook;
        this.data = data;
        this.el = TaskDomTree( this.data );
        
        this.render();
    }

    render() {
        this.hook.appendChild( this.el );
    }
}