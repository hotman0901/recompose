import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { Container } from '../../widgets/container';


@translate([], { wait: isNode ? false : true })
class Page3 extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            value: 0,
            result: 'not'
        };

        this.delay = this.delay.bind(this);
    }

    async setStateAsync()
    {
        console.log('1-1 =>', this.state.value);
        await this.setState(update(this.state, {
            value: { $set: this.state.value + 1 }
        }));

        console.log('2-1 =>', this.state.value);
        await this.delay(5000);
        console.log('2-2 =>', this.state.value);

        await this.setState(update(this.state, {
            result: { $set: 'ok' }
        }));
        console.log(3)
    }

    delay = (interval) => {
        return new Promise((resolve) => {
            setTimeout(resolve, interval);
        });
    };

    verifier()
    {
        if (this.state.value === 1)
        {
            console.log(4);
            this.setState(update(this.state, {
                result: { $set: 'ok' }
            }));
            console.log(5);
        }
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
                <h1>{this.state.value}</h1>
                <h2>{this.state.result}</h2>
                <div onClick={() => this.setStateAsync()}>click</div>
            </Container>
        );
    }
}

export default connect()(Page3);
