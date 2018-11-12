import dom from '../services/dom';

// const TaskFormDomTree = (data = {}) => {
//     return dom({
//         element: 'div',
//         id: 'task-creator',
//         children: [
//             dom({
//                 element: 'input',
//                 attributes: {
//                     type: 'text',
//                     id: 'task-input',
//                     placeholder: 'Enter title here...'
//                 }
//             }),
//             dom({
//                 element: 'button',
//                 id: 'create-task',
//                 className: 'btn',
//                 innerText: 'Add Task'
//             })
//         ]
//     });
// }

const TaskFormDomTree = (data = {}) => {
    return dom('div', {id: 'task-creator'}, [
        dom('input', {type: 'text', id: 'task-input', placeholder: 'Enter title...'}),
        dom('button', {id: 'create-task', className: 'btn'}, 'Add Task')
    ]);
}

export default TaskFormDomTree;