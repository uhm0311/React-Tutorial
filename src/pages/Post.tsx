import { RouteComponentProps } from "react-router-dom";
import React from "react";

class Post extends React.Component<RouteComponentProps<{id: string}>> {
    render() {
        return (
            <div>
                Post {this.props.match.params.id}
            </div>
        );
    }
}

export default Post;