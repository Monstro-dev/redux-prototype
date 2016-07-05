import { connect } from 'react-redux';
import { removeTodo } from '../actions/todo.action';
import ClickableText from '../components/ClickableText/ClickableText';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickEvent: () => {
            console.log(ownProps);
            dispatch(removeTodo(ownProps.id));
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        context: ownProps.context
    }
};

const RemoveTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClickableText);

export default RemoveTodo;
