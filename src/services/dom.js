export default function dom( tree ) {
    tree.element = tree.element || 'div';
    let $domTree = document.createElement( tree.element );
    
    if ( tree.attributes ) {
        for (let attr in tree.attributes ) {
            let domName = attr === 'className' ? 'class' : attr;
            $domTree.setAttribute( domName, tree.attributes[attr] );
        }
    } else {
        $domTree.className = tree.className || '';
        $domTree.id = tree.id || '';
    }

    if ( tree.children ) {
        tree.children.forEach( child => {
            $domTree.appendChild( child );
        });
    } else if ( tree.innerHTML ) {
        $domTree.innerHTML = tree.innerHTML;
    } else {
        $domTree.innerText = tree.innerText || '';
    }

    return $domTree;
}

// let example = {
//     element: 'article',
//     attributes: {
//         className: 'task-wrap',
//         id: 'task-id-12',
//     },
//     innerText: 'This is the task content',
// }

// let example = `
//     article class="test" : This is is articles inner text.
//     > div class="test-div" : This is div's text.
//     > div class="test-div2" : This is another child.
//         >> span class="test-span" :
// `

// let example = `
//     article class="test" : This is is articles inner text.
//     > div class="test-div" : This is div's text.
//     > div class="test-div2" : This is another child.
//         >> span class="test-span" : This is a span.
//         >> p : This is a paragraph.
// `;

// export function parseTemplate( string ) {
//     let split = string.split('>');
//     split = split.map( item => item.trim() );
//     split = split.map( item => item.split(":") );
  
//     let tree = {};
  
//     split.forEach((item, index) => {
//         if ( index === 0 ) {
//             tree.element = item[0].trim();
//             tree.contents = item[1].trim();
//             tree.children = [];
//         } else {
//             if (item[0] === '') return;

//             tree.children.push({
//                 element: !item[0] || item[0].trim(),
//                 contents: !item[1] || item[1].trim(),
//                 children: split[index + 1] 
//                     ? split[index + 1][0] === '' ? split[index + 2] : null
//                     : null
//             });
//         }
//     });
      
//   console.log( tree );
// };

// parseTemplate( example );