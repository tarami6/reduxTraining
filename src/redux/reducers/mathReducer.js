const defaultState = {
    movies: []
}

const mathReducer = (state = {defaultState}, action) => {
    switch (action.type) {
        case "INITIAL_MOVIES":
            state = {
                ...state,
                movies: action.payload
            }
            break;
        case "DELETE_MOVIE":
            state = {
                ...state,
                movies: state.movies.splice(action.payload, 1)
            }
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]

            }
        case 'RECEIVE_DATA':
            state ={
                ...state,
                result: action.payload
            }
            break
    }
    return state;
};
export default mathReducer;