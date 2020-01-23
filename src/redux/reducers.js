export const INITIAL_STATE = {
    errorMessages: [],
    output: [],
    hasError: null
};


const reducers = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR_MESSAGE':
            const newState = {...state};
            newState.errorMessages.push(action.errorMessage);
            newState.hasError = true;
            return newState;
        case 'ADD_OUTPUT':
            const stateToBeUpdated = {...state};
            stateToBeUpdated.output.push(action.output);
            stateToBeUpdated.hasError = false;
            return stateToBeUpdated;
        case 'CLEAR_ALL':
            return {
                errorMessages: [],
                output: [],
                hasError: null
            }
        default:
            return state
    }
}

export default reducers;