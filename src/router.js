/**
 * Created by lusha on 2018/8/10.
 */

import React from 'react';
import {Router, Route, Link} from 'react-router';
import Inbox from './app';
import About from './components/about';

class Routers extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Routers