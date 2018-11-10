import hookElement from '../services/hookElement';

export default class Body {
    constructor( hook ) {
        this.hook = hook;
        this.el = document.createElement('section');
        this.id = 'body-test';
        this.template = '<h1>This is a test</h1>';

        this.init();
    }

    init() {
        this.render();
    }

    render() {
        hookElement( this.el, this );
    }
}