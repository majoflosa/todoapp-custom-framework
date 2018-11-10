import _t from 'underscore.template';
import template from '../templates/test.html';

const testFn = () => {
    let _template = _t( template );
    document.getElementsByTagName('body')[0].innerHTML = _template({test: 'testing!!!'});
    // console.log( template );
    
    let newEl = document.createElement('button');
    newEl.innerText = 'Testing';
    document.getElementsByTagName('body')[0].appendChild( newEl );
}

export default testFn;