import React, {Component, Fragment} from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router-dom';

class Result extends Component<RouteComponentProps> {
    render() {
        const query = queryString.parse(this.props.location.search);

        return (
            <div>
                {Object.keys(query).map((key: string) => {
                    let question = Number(key);
                    let answer = Number(query[key]);

                    return (
                        <div key={key}>
                            질문
                            <p style={{color: '#ff0000', display: 'inline'}}> {question}</p>의 답은
                            <p style={{color: '#ff0000', display: 'inline'}}> {answer}</p>입니다.
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Result;