export default function dom( element, attributes, content, data = {} ) {
    let $domTree = document.createElement( element );
    
    if ( attributes ) {
        for (let attr in attributes) {
            let domName = attr === 'className' ? 'class' : attr;
            $domTree.setAttribute( domName, attributes[attr] );
        }
    }

    if ( typeof content === 'string' || !content ) $domTree.innerHTML = content || '';
    else content.forEach( child => $domTree.appendChild(child) );

    return $domTree;
}