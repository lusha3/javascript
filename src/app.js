/**
 * Created by lusha on 2018/8/10.
 */
import React from 'react';
import {Router, Route} from 'react-router';
import Routers from './router';
import About from './components/about';
import Inbox from './components/Inbox';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Router>
            <Route path="/" component={Routers}>
                <Route path="about" component={About} />
                <Route path="inbox" component={Inbox} />
            </Route>
        </Router>)
    }
}

export default App;