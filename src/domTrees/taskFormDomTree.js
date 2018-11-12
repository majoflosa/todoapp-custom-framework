import dom from '../services/dom';

const TaskFormDomTree = (data = {}) => {
    return dom('div', {id: 'task-creator'}, [
        dom('input', {type: 'text', id: 'task-input', placeholder: 'Enter title...'}),
        dom('button', {id: 'create-task', className: 'btn'}, 'Add Task')
    ]);
}

export default TaskFormDomTree;