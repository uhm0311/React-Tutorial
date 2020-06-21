import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../components/Menu';
import Posts from '../pages/Posts';

class App extends Component<{name: string}> {
    render() {
        return (
            <div>
                <div>
                    <Menu></Menu>
                </div>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Switch>
                        <Route path="/about/:name" component={About}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                    <Route path="/posts" component={Posts}></Route>
                </div>
            </div>
        );
    }
}

export default App;