


const initialState = {
    playerData: {},
    error: null,
    isFetching: 'false'
}

function reducer(state = initialState, action) {
    console.log('Reducer Firing', action)
    switch(action.type) {
        default: 
            return state;
    }
}