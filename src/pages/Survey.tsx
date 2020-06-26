import React, {Component, ChangeEvent, Fragment} from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

class Survey extends Component<RouteComponentProps, {[key: number]: number}> {
    questions: number[] = [1, 2, 3, 4];
    answers: number[] = [1, 2, 3, 4, 5, 6];

    constructor(props: RouteComponentProps) {
        super(props);

        let temp: {[id: number]: number} = {};
        for (let i = 1; i <= this.questions.length; i++) {
            temp[i] = 0;
        }

        this.state = temp;

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        
    }

    handleChange(e: ChangeEvent<HTMLInputElement>) {
        let key: number = Number(e.target.value[0]);
        let value: number = Number(e.target.value[2]);

        let temp: {[id: number]: number} = {};
        temp[key] = value;
        
        this.setState({
            ...this.state,
            ...temp
        });
    }

    handleClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        let query: string = '';

        for (let i = 1; i <= this.questions.length; i++) {
            if (this.state[i] === 0) {
                alert('모든 항목을 완료해 주세요.');
                return;
            } else {
                if (query.length == 0) {
                    query += '?';
                } else {
                    query += '&';
                }

                query += (i + '=' + this.state[i]);
            }
        }

        this.props.history.push('Result' + query);
    }

    render = () => (
        <div>
            <h2>
                Survey
            </h2>
            <div>
                {this.questions.map((question: number) => {
                    return (
                        <Fragment key={"question" + question}>
                            질문 {question}
                            <div>
                                {this.answers.map((answer: number) => {
                                    let name: string = 'answer' + question;
                                    let id: string = 'answer' + question + '-' + answer;
                                    let value: string = question + '-' + answer;

                                    return (
                                        <Fragment key={"answer" + answer}>
                                            <input 
                                                type="radio" 
                                                name={name}
                                                id={id}
                                                value={value}
                                                checked={this.state[question] === answer}
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor={id}>답변 {question}-{answer}</label>
                                        </Fragment>
                                    );
                                })}
                            </div>
                            <br/>
                        </Fragment>
                    );
                })}
            </div>
            <input type="button" value="제출" onClick={this.handleClick}/>
        </div>
    );
}

export default Survey;