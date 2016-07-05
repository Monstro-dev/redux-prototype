require('./Todo.scss');

import React from 'react';
import RemoveTodo from '../../containers/RemoveTodo.container';

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
            <div className='row'>
                <li onClick={this.props.onClick}>
                    <span className={spanCls}>{this.props.text}</span>
                    <span> <RemoveTodo id={this.props.id} context='remove'/> </span>
                </li>
            </div>
        );
    }
}
