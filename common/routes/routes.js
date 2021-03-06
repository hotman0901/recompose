import { Index, Counter, NotFound, Page1, Page2, Page3, Page4 } from './containerServer';

if (undefined === System.import)
{
    System.import = (path) =>
    {
        return Promise.resolve(require(path));
    };
}

export const routes = [
    {
        component: Index,
        path: '/',
        exact: true,
        loadData: () => Promise.all([
            // dispatch(postsList(params))
        ])
    },
    {
        component: Counter,
        path: '/counter',
        exact: true
    },
    {
        component: NotFound,
        path: '/notFound',
        exact: true
    },
    {
        component: Page1,
        path: '/page1',
        exact: true
    },
    {
        component: Page2,
        path: '/page2',
        exact: true
    },
    {
        component: Page3,
        path: '/page3',
        exact: true
    },
    {
        component: Page4,
        path: '/page4',
        exact: true
    }
];
