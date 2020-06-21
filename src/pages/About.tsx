import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import quertyString from 'query-string';

class About extends React.Component<RouteComponentProps<{name: string}>> {
    render() {
        const query = quertyString.parse(this.props.location.search);
        const detail = query.detail === 'true';

        return (
            <div>
                <h2>About {this.props.match.params.name}</h2>
                {detail && 'detail: abcdefg'}
            </div>
        );
    }
}

export default About;