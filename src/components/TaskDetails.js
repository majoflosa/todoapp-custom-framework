import TaskDetailsDomTree from '../domTrees/taskDetailsDomTree';

export default class TaskDetails {
    constructor( hook, data ) {
        this.hook = hook;
        this.data = data;

        this.el = TaskDetailsDomTree( this.data.task );
        
        this.render();

        this.cacheDOM();
        this.bindEvents();

        // binding event handlers' context
        this.handleClickBack = this.handleClickBack.bind( this );
        this.handleClickFieldWrap = this.handleClickFieldWrap.bind( this );
    }

    cacheDOM() {
        this.DOM = {
            back: this.el.querySelector('.back-wrap a'),
            fieldWrap: this.el.querySelectorAll('.details-field-wrap'),
            confirmEdit: this.el.querySelectorAll('.confirm-edit')
        };
    }

    bindEvents() {
        this.DOM.back.addEventListener( 'click', (e) => this.handleClickBack(e) );
        [...this.DOM.fieldWrap].forEach( field => field.addEventListener('click', this.handleClickFieldWrap, true) );
        [...this.DOM.confirmEdit].forEach( btn => btn.addEventListener('click', this.confirmEdit) );
    }

    render() {
        this.hook.appendChild( this.el );
    }

    handleClickBack( event ) {
        event.preventDefault();
        this.data.pubsub.emit('route changed', event.target.href);
    }

    handleClickFieldWrap( event ) {
        event.preventDefault();

        this.classList.add('editing');
        this.querySelector('.edit-field').focus();
    }

    confirmEdit( event ) {
        event.target.parentElement.classList.remove('editing');
        // console.log('event.target.parentElementNode: ', event.target.parentElement);
    }
}