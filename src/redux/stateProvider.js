import { connect } from 'react-redux';
import { ADD_ERROR_MESSAGE, ADD_OUTPUT, CLEAR_ALL } from './actions';

function mapStateToProps(state) {
    return {
        errorMessages: state.errorMessages,
        output: state.output,
        hasError: state.hasError
    };
}

function mapDispatchProps(dispatch) {
    return {
        addErrorMessage: (errorMessage) => {
            dispatch({ type: ADD_ERROR_MESSAGE, errorMessage });
        },
        addOutput: (output) => {
            dispatch({ type: ADD_OUTPUT, output });
        },
        clearAll: () => {
            dispatch({type: CLEAR_ALL})
        }
    };
}

export default function withState(WrappedComponent) {
    return connect(mapStateToProps, mapDispatchProps)(WrappedComponent);
}