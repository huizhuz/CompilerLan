// action types
export const ADD_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';
export const ADD_OUTPUT = 'ADD_OUTPUT';
export const CLEAR_ALL = 'CLEAR_ALL';


// actions
export function addErrorMessages(errorMessage) {
    return {
        type: ADD_ERROR_MESSAGE,
        errorMessage
    }
}

export function addOutput(outputMessage) {
    return {
        type: ADD_OUTPUT,
        outputMessage
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
    }
}
