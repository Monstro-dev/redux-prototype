import React from 'react'

class ClickableText extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <span onClick={this._handleOnClick.bind(this)}>
                <a href='#'>{this.props.context}</a>
            </span>
        );
    }

    _handleOnClick(e) {
        e.preventDefault();
        console.log('clicked');
        this.props.onClickEvent();
    }
}

export default ClickableText;
