import dom from '../services/dom';

const TaskDetails = (data = {}) => {
    return dom('div', {id: 'task-details-wrap'}, [
            dom('div', {className: 'back-wrap'}, [
                dom('a', {href: '/#/'}, '« Back')
            ]),
            dom('div', {className: 'task-details-title'}, [
                dom('h4', null, 'Title:'),
                dom('div', {className: 'details-field-wrap'}, [
                    dom('h2', {className: 'edit-target'}, data.title),
                    dom('input', {
                        type: 'text', 
                        id: 'edit-title', 
                        className: 'edit-field'
                    }),
                    dom('button', {className: 'confirm-edit btn'}, 'Save')
                ])
            ]),
            dom('div', {className: 'task-details-description'}, [
                dom('h4', null, 'Description'),
                dom('div', {className: 'details-field-wrap'}, [
                    dom('p', {className: 'edit-target'}, data.description),
                    dom('textarea', {
                        id: 'edit-description', 
                        rows: 5, 
                        className: 'edit-field'
                    }),
                    dom('button', {className: 'confirm-edit btn'}, 'Save')
                ])
            ]),
            dom('div', {className: 'task-details-status-wrap'}, [
                dom('h4', null, 'Status'),
                dom('div', null, [
                    dom('span', {
                        className: `task-status ${data.status === "unstarted" ? "selected-status" : null}`
                    }, 'Unstarted'),
                    dom('span', {
                        className: `task-status ${data.status === "ongoing" ? "selected-status" : null}`
                    }, 'Ongoing'),
                    dom('span', {
                        className: `task-status ${data.status === "revising" ? "selected-status" : null}`
                    }, 'Revising'),
                    dom('span', {
                        className: `task-status ${data.status === "done" ? "selected-status" : null}`
                    }, 'Done'),
                ])
            ]),
            dom('div', {className: 'delete-section'}, [
                dom('h4', null, `Delete "${data.title}"?`),
                dom('button', {className: 'btn'}, 'Delete')
            ])
    ]);
}

export default TaskDetails;