import React from 'react';
import {Paper} from '@material-ui/core';
import {WINEQUAL, WIN} from '../constants';
import {connect} from 'react-redux'

const EndCard = ({Team1Points, Team2Points}) => (
        <Paper className="gamePaper">
        <h1>Congratulations!</h1>
            {
                (Team1Points > Team2Points) ? (WIN + " Team 1!") 
                : (Team1Points === Team2Points) ? (WINEQUAL)
                : (WIN + " Team 2!")
            }
        </Paper>
)

const mapStateToProps = state => ({
    Team1Points: state.game.points[1],
    Team2Points: state.game.points[2]
})

export default connect (mapStateToProps)(EndCard);
