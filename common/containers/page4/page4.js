import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
import equal from 'deep-equal';
// import update from 'immutability-helper';
import { Helmet } from 'react-helmet';
import { composeState, composeDerivedStateFromProps } from 'compose-state';
import { Container } from '../../widgets/container';


@translate([], { wait: isNode ? false : true })
class Page4 extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
        this.updateScore = this.updateScore.bind(this);
        this.logTime = this.logTime.bind(this);
        this.updateScoreLogTime = this.updateScoreLogTime.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (equal(this.props, nextProps) && equal(this.state, nextState))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    onScore = () => {
        this.setState(this.updateScoreLogTime);
    };
    updateScore = s => ({ score: s.score + 1 });

    logTime = s => ({ log: [...s.log, Date.now()] });

    updateScoreLogTime = () => {
        console.log(123);
        return composeState(this.onScore);
    }

    render()
    {
        console.log(this.state);
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
                <div onClick={this.updateScoreLogTime}>btn</div>
            </Container>
        );
    }
}

export default connect()(Page4);
