import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;
`;


export const Button2 = styled.button`
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => {
        if (!props.bgc) {
            return 'red';
        }
        else
        {
            return props.bgc;
        }
    }};
`;
