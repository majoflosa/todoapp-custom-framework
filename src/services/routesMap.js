import TasksAll from '../components/View.AllTasks';
import TasksActive from '../components/View.ActiveTasks';

const routesMap = [
    { path: '/', view: TasksAll },
    { path: '/home', view: TasksAll },
    { path: '/active', view: TasksActive }
];

export default routesMap;