import dom from '../services/dom';

const NavBarDomTree = (data = {}) => {
    return dom('header', {id: 'header'}, [ 
                dom('div', {id: 'logo'}, 'ToDos'), 
                dom('nav', {id: 'site-nav'}, [
                    dom('a', {href: '#/', className: 'current'}, 'All'),
                    dom('a', {href: '#/active'}, 'Active'),
                    dom('a', {href: '#/unstarted'}, 'Unstarted'),
                    dom('a', {href: '#/ongoing'}, 'Ongoing'),
                    dom('a', {href: '#/revising'}, 'Revising'),
                    dom('a', {href: '#/done'}, 'Done'),
                ])
            ]
    );
}

export default NavBarDomTree;