export const INITIAL_STATE = {
    errorMessages: [],
    output: []
};

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ERROR_MESSAGE':
            const newState = {...state};
            newState.errorMessages.push(action.errorMessage);
            return newState;
        case 'ADD_OUTPUT':
            const stateToBeUpdated = {...state};
            stateToBeUpdated.output.push(action.outputMessage);
            return stateToBeUpdated;
        case 'CLEAR_ALL':
            return INITIAL_STATE
        default:
            return state
    }
}

export default reducers;