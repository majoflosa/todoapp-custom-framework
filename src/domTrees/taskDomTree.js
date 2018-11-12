import dom from '../services/dom';

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