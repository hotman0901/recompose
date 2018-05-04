import { Index, Counter, NotFound, Page1, Page2 } from './containerServer';

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
    }
];
