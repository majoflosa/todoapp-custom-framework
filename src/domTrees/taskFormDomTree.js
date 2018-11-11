import dom from '../services/dom';

const TaskFormDomTree = (data = {}) => {
    return dom({
        element: 'div',
        id: 'task-creator',
        children: [
            dom({
                element: 'input',
                attributes: {
                    type: 'text',
                    id: 'task-input',
                    placeholder: 'Enter title here...'
                }
            }),
            dom({
                element: 'button',
                id: 'create-task',
                className: 'btn',
                innerText: 'Add Task'
            })
        ]
    });
}

export default TaskFormDomTree;