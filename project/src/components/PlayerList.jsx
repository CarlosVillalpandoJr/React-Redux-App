import React from 'react';
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/actions';


const PlayerList = props => {
    console.log('PlayerList Props: ', props)
    return (
        <div>

        </div>
    )
} 




export default connect(state => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        playerData: state.playerData
    }
}, {fetchPlayers})(PlayerList);