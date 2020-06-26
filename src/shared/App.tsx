import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Survey from '../pages/Survey';
import Result from '../pages/Result';

class App extends Component<{name: string}> {
    render() {
        return (
            <div>
                <Route exact path="/survey" component={Survey}></Route>
                <Route path="/result" component={Result}></Route>
            </div>
        );
    }
}

export default App;