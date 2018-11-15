/**
 * This function replaces the need for templating engines, as it returns
 * HTML elements or trees of elements built from the arguments passed into it.
 * 
 * @param {string} element html tag name
 * @param {object} attributes html attribute key/value pairs
 * @param {strong/array} content strong of inner html or array of child elements
 */
export default function dom( element, attributes, content ) {
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