import TaskDetailsDomTree from '../domTrees/taskDetailsDomTree';

export default class TaskDetails {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = TaskDetailsDomTree( this.data );
        
        this.render();
    }

    render() {
        this.hook.appendChild( this.el );
    }
}