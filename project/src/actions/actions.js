export const FETCH_PLAYERS_LOADING = 'FETCH_PLAYERS_LOADING';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILED = 'FETCH_PLAYERS_FAILED';


export const playersLoading = () => ({ type: FETCH_PLAYERS_LOADING })

export const playersLoadSuccess = () => ({ 
    type: FETCH_PLAYERS_SUCCESS, 
    payload: data
})

export const playersLoadFailure = () => ({ 
    type: FETCH_PLAYERS_FAILED, 
    payload: error 
})


export function fetchPlayers() {
    
    return function(dispatch) {
        dispatch(playersLoading());

        return fetch(`https://www.balldontlie.io/api/v1/players`)
            .then(response => response.json())
            .then(response => dispatch(playersLoadSuccess(response.data)))
            .catch(error => dispatch(playersLoadFailure(error)))
    }
}