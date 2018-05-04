import React from 'react';
// import PropTypes from 'prop-types';
import { withState } from 'recompose';
import Presentation from '../presentation/presentation';

// withState(變數名稱、觸發的方法、初始值)
// 觸發的方法如果沒使用是無法改變state
const enhance = withState('counter', 'setCounter', 0);
// const enhance = withState(['counter', 'setCounter', 0]);

// 名稱必須跟上面一樣
const Counter = enhance(({ counter, setCounter }) =>
    (
        <div>
            Count: {counter}
            <button onClick={() => setCounter(n => n + 1)}>Increment</button>
            <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
        </div>
    ));

const Recompose = () =>
{
    return (
        <div>
            <h1>reCompose</h1>
            <Counter />
            <Presentation />
        </div>
    );
};

export default Recompose;

