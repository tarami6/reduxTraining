export function setName(name) {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: 'SET_NAME',
    //             payload: name
    //         })
    //     }, 2000)
    // }
    return {
        type: "SER_NAME",
        payload:  name
    }
}

export function setAge(age) {
    return {
        type: 'SET_AGE',
        payload: age
    }
}

