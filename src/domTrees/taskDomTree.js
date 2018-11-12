import dom from '../services/dom';

// const TaskDomTree = (data) => {
//     return dom({
//         element: 'article',
//         className: 'task-wrap',
//         children: [
//             dom({
//                 element: 'div',
//                 className: `task-title-wrap ${data.status === 'done' ? 'done' : null}`,
//                 children: [
//                     dom({
//                         element: 'span',
//                         className: 'mark-done',
//                     }),
//                     dom({
//                         element: 'span',
//                         className: 'task-status',
//                         innerText: data.status
//                     }),
//                     dom({
//                         element: 'span',
//                         className: 'task-title',
//                         innerText: data.title
//                     })
//                 ]
//             }),
//             dom({
//                 element: 'div',
//                 className: 'task-links',
//                 children: [
//                     dom({
//                         element: 'a',
//                         attributes: {href: '#', className: 'btn task-details'},
//                         innerText: 'Details'
//                     }), 
//                     dom({
//                         element: 'span',
//                         className: 'delete-task btn-border',
//                         innerText: 'x'
//                     })
//                 ]
//             })
//         ]
//     });
// } 

const TaskDomTree = (data = {}) => {
    return dom('article', {className: 'task-wrap'}, [
                dom('div', {className: `task-title-wrap ${data.status === 'done' ? 'done' : null}`}, [
                    dom('span', {className: 'mark-done'}),
                    dom('span', {className: 'task-status'}, data.status),
                    dom('span', {className: 'task-title'}, data.title)
                ]),
                dom('div', {className: 'task-links'}, [
                    dom('a', {href: '#', className: 'btn task-details'}, 'Details'),
                    dom('span', {className: 'delete-task btn-border'}, 'x')
                ])
    ]);
}

export default TaskDomTree;