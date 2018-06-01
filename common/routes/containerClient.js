import asyncComponent from '../utils/asyncComponent';

export const Index = asyncComponent('Index', () => import('../containers/index/index'));
export const Counter = asyncComponent('Counter', () => import('../containers/counter/counter'));
export const NotFound = asyncComponent('NotFound', () => import('../containers/notFound/notFound'));
export const Page1 = asyncComponent('Page1', () => import('../containers/page1/page1'));
export const Page2 = asyncComponent('Page2', () => import('../containers/page2/page2'));
export const Page3 = asyncComponent('Page3', () => import('../containers/page3/page3'));
export const Page4 = asyncComponent('Page4', () => import('../containers/page4/page4'));
