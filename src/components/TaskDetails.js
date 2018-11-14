import TaskDetailsDomTree from '../domTrees/taskDetailsDomTree';

export default class TaskDetails {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = TaskDetailsDomTree( this.data.task );
        
        this.render();

        this.cacheDOM();
        this.bindEvents();

        this.handleClickBack = this.handleClickBack.bind( this );
    }

    cacheDOM() {
        this.DOM = {
            back: this.el.querySelector('.back-wrap a')
        };
    }

    bindEvents() {
        this.DOM.back.addEventListener( 'click', (e) => this.handleClickBack(e) );
    }

    render() {
        this.hook.appendChild( this.el );
    }

    handleClickBack(event) {
        event.preventDefault();
        this.data.pubsub.emit('route changed', event.target.href)
    }
}