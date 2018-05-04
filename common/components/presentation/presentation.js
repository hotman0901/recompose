import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';

/**
 * Functional component 使用 recompose
 *
 */
// 另外寫法 先將要用到的東西塞入
const TestComponent = ({
    title, message, toggleVisibility, isVisible, isbenny, bennyBtn1, bennyBtn2, zoo
}) =>
{
    return (
        <div>
            <h1>{title}</h1>
            {
                isVisible ? <p>Visible</p> : <p> Not Visible </p>
            }
            <p>message::::::::</p>
            <p style={{ color: 'red' }}>{message}-{zoo}</p>
            <button name="benny" onClick={toggleVisibility}> toggleVisibility! </button>
            <br />
            {
                `isbenny---${isbenny}`
            }
            <br />
            <button name="benny" onClick={bennyBtn1}> bennyBtn1! </button>
            <button name="benny" onClick={bennyBtn2}> bennyBtn1! </button>
        </div>
    );
};

// 比較特別的是propTypes都是func
TestComponent.propTypes = {
    title: () => {},
    message: () => {},
    toggleVisibility: () => {},
    isVisible: () => {},
    isbenny: () => {},
    bennyBtn1: () => {},
    bennyBtn2: () => {},
};

TestComponent.defaultProps = {
    title: PropTypes.func,
    message: PropTypes.func,
    toggleVisibility: PropTypes.func,
    isVisible: PropTypes.func,
    isbenny: PropTypes.func,
    bennyBtn1: PropTypes.func,
    bennyBtn2: PropTypes.func
};

// 設定state變數、updateState的方法、初始值
const Presentation = compose(
    withState('isVisible', 'toggleVis', false),
    withState('isbenny', 'toggleBenny', 'init'),
    withHandlers({
        toggleVisibility: ({ toggleVis, isVisible }) => {
            return () => {
                return toggleVis(!isVisible);
            };
        },
        bennyBtn1: ({ toggleBenny, isbenny }) => {
            return () => {
                return toggleBenny(() => {
                    return `${isbenny}  + ya1`;
                });
            };
        },
        bennyBtn2: ({ toggleBenny, isbenny }) => {
            return () => {
                return toggleBenny(() => {
                    return `${isbenny}  + ya2`;
                });
            };
        },
    }),
    withProps(({ isVisible }) => {
        // 回傳給Presentation的參數
        return {
            title: isVisible ? 'This is the visible title' : 'This is the default title',
            message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!',
        };
    }),
    lifecycle({
        componentDidMount() {
            setTimeout(() => {
                this.setState({ message: 'update from componentDidMount', zoo: 'bird' });
            }, 10);
        },
    }),
)(TestComponent);

export default Presentation;
