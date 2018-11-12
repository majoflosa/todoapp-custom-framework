import dom from '../services/dom';

// const TaskListDomTree = (data = {}) => {
//     return dom({
//         element: 'div',
//         id: 'task-list',
//     });
// }

const TaskListDomTree = (data = {}) => {
    return dom('div', {id: 'task-list'});
}

export default TaskListDomTree;