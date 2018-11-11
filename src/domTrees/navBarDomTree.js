import dom from '../services/dom';

const NavBarDomTree = (data = {}) => {
    return dom({
        element: 'header',
        id: 'header',
        children:[
            dom({
                element: 'div',
                id: 'logo',
                innerText: 'ToDos'
            }),
            dom({
                element: 'nav',
                id: 'site-nav',
                children: [
                    dom({
                        element: 'a',
                        attributes: {href: '#', className: 'current'},
                        innerText: 'All'
                    }),
                    dom({
                        element: 'a',
                        attributes: {href: '#'},
                        innerText: 'Active'
                    }),
                    dom({
                        element: 'a',
                        attributes: {href: '#'},
                        innerText: 'Unstarted'
                    }),
                    dom({
                        element: 'a',
                        attributes: {href: '#'},
                        innerText: 'Ongoing'
                    }),
                    dom({
                        element: 'a',
                        attributes: {href: '#'},
                        innerText: 'Revising'
                    }),
                    dom({
                        element: 'a',
                        attributes: {href: '#'},
                        innerText: 'Done'
                    })
                ]
            })
        ]
    })
}

export default NavBarDomTree;