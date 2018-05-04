import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
// import update from 'immutability-helper';
import { Observable, of, from, fromEvent, interval } from 'rxjs';
import { map, mapTo, filter, take } from 'rxjs/operators';
import { Helmet } from 'react-helmet';
import { Container } from '../../widgets/container';


@translate([], { wait: isNode ? false : true })
class Page2 extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
        };
    }

    componentDidMount()
    {
        // this.useCreate();
        // this.useOf();
        // this.useFrom();
        // this.useFromEvent();
        // this.useInterval();
        // this.useMapTo();
        // this.useFilter();
        this.userTake();
    }

    useCreate()
    {
        // 觀察者模式
        // 遇到complete或error後面就會停止動作
        // 如果沒有寫complete當跑完全部自動執行complete
        const observable = Observable.create((observer) => {
            observer.next('a');
            observer.next('b');
            // observer.error('errororrorororb');
            observer.complete();
            observer.next('c');
        });

        const observer = {
            next: (value) => {
                console.log(value);
            },
            error: (value) => {
                console.log(value);
            },
            complete: () => {
                console.log('complete');
            },
        };

        observable.subscribe(observer);
    }

    useOf()
    {
        // 觀察者模式
        // 遇到complete或error後面就會停止動作
        // 如果沒有寫complete當跑完全部自動執行complete
        const observable = of('a1', 'b1');

        const observer = {
            next: (value) => {
                console.log(value);
            },
            complete: () => {
                console.log('complete');
            },
            error: (value) => {
                console.log(value);
            },
        };
        observable.subscribe(observer);
    }

    useFrom()
    {
        // 觀察者模式
        // 遇到complete或error後面就會停止動作
        // 如果沒有寫complete當跑完全部自動執行complete

        // from: 傳遞任何可列舉的參數 (array, string, promise…iterator, set)
        const arr = ['array', 'a1', 'b1'];
        const observable = from(arr);
        // 如果放字串他會一個一個字拆解
        // const observable = from('hello ha');
        const observer = {
            next: (value) => {
                console.log(value);
            },
            complete: () => {
                console.log('complete');
            },
            error: (value) => {
                console.log(value);
            },
        };
        observable.subscribe(observer);
    }

    useFromEvent()
    {
        const observable = fromEvent(document.body, 'click');
        // const observable = fromEvent(window, 'click');

        const observer = {
            next: (value) => {
                console.log(value);
            },
            complete: () => {
                console.log('complete');
            },
            error: (value) => {
                console.log(value);
            },
        };
        observable.subscribe(observer);
    }

    useInterval()
    {
        let source = interval(1000);
        // 必須用pipe串map
        let newest = source.pipe(map(x => x + 2));
        newest.subscribe(console.log);

        /** 將source 都 + 2
         *  source: -----0-----1-----2-----3--...
            map(x => x + 2)
            newest: -----2-----3-----4-----5--...
         */
    }

    // 全部改成2
    useMapTo()
    {
        let source = interval(1000);
        // 必須用pipe串mapTo
        let newest = source.pipe(mapTo(2));
        newest.subscribe(console.log);
    }

    // 只濾出要的值
    useFilter()
    {
        let source = interval(1000);
        // 必須用pipe串mapTo
        let newest = source.pipe(filter(x => x % 2 === 0));
        newest.subscribe(console.log);
    }

    // 只取前面幾個
    userTake()
    {
        let source = interval(1000);
        // 必須用pipe串mapTo
        let newest = source.pipe(take(3));
        newest.subscribe(console.log);
    }

    render()
    {
        return (
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />
                    <link rel="canonical" href="" />
                </Helmet>
                <h1 id="benny">test</h1>
                <input type="text" id="benny" />
            </Container>
        );
    }
}

export default connect()(Page2);
