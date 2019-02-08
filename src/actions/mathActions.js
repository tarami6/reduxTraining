export function addNumber(number) {
    return {
        type: 'ADD',
    payload: number
}
}

export function subtractNumber(number) {
    return {
        type: 'SUBTRACT',
    payload: number
}
}
export function initialMovies(movies) {
    return {
        type: 'INITIAL_MOVIES',
        payload: movies
    }
}

export function deleteMovie(index) {
    return {
        type: 'DELETE_MOVIE',
        payload: index
    }
}



