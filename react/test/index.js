/**
 * Created by lusha on 2018/8/8.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Greeting extends React.Component{
    constructor(props){
        super(props)
    }
    propTypes ={

    }

    defaultProps ={

    }

    render(){
        return (<div></div>)
    }
}

ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('root')
)