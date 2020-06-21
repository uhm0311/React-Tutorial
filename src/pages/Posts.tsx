import { RouteComponentProps, Route, NavLink } from "react-router-dom";
import React from "react";
import Post from "./Post";

const activeStyle = {
    color: 'red',
    fontSize: '1.25rem'
};

class Posts extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <h2>Post List</h2>
                <ul>
                    <li><NavLink exact to={this.props.match.url + '/1'} activeStyle={activeStyle}>Post #1</NavLink></li>
                    <li><NavLink exact to={this.props.match.url + '/2'} activeStyle={activeStyle}>Post #2</NavLink></li>
                    <li><NavLink exact to={this.props.match.url + '/3'} activeStyle={activeStyle}>Post #3</NavLink></li>
                    <li><NavLink exact to={this.props.match.url + '/4'} activeStyle={activeStyle}>Post #4</NavLink></li>
                </ul>
                <Route exact path={this.props.match.url} render={() => (<h3>Please select any post.</h3>)}></Route>
                <Route path={this.props.match.url + '/:id'} component={Post}></Route>
            </div>
        );
    }
}

export default Posts;