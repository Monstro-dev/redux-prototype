require('./Todo.scss');

import React from 'react';

export default class Todo extends React.Component {
    // static propTYpes = {
    //     text: React.PropType.string.isRequired
    // }
    constructor(props) {
        super();
    }

    render() {
        let spanCls = this.props.completed ? 'completed' : 'incomplete';
        return (
            <li onClick={this.props.onClick}>
                <span className={spanCls}>{this.props.text} testtest</span>
            </li>
        );
    }
}
