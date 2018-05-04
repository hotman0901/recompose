import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { Container } from '../../widgets/container';
import Recompose from '../../components/recompose/recompose';


@translate([], { wait: isNode ? false : true })
class Page1 extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            count: 0
        };
    }

    countUp()
    {
        this.setState(update(this.state, {
            count: { $set: this.state.count + 1 }
        }));
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

                <Recompose />
                <hr />
                <h1>origin: {this.state.count}</h1>
                <button onClick={() => this.countUp()}>click</button>
            </Container>
        );
    }
}

export default connect()(Page1);
