import template from '../templates/test.html';

const testFn = () => {
    document.getElementsByTagName('body')[0].innerHTML = template;
    // console.log( template );
    
    let newEl = document.createElement('button');
    newEl.innerText = 'Testing';
    document.getElementsByTagName('body')[0].appendChild( newEl );
}

export default testFn;