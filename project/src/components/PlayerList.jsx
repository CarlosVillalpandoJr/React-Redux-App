import React from 'react';
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/actions';


const PlayerList = props => {
    console.log('PlayerList Props: ', props)
    return (
        <div>
            <button onClick={() => props.fetchPlayers()}>Fetch Players</button>
            {props.playerData.map(player => {
                return (
                    <div className='player-card' key={player.id}>
                        <h3>{player.first_name} {player.last_name}</h3>
                        <p>{player.team.full_name}</p>
                    </div>
                )
            })}
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