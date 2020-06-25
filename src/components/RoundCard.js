import React from "react";
import {ROUND1_DESC} from '../constants';
import {ROUND2_DESC} from '../constants';
import {ROUND3_DESC} from '../constants';
import './RoundCard.css';
import { Paper, Button } from "@material-ui/core";


const RoundCard = ({roundNumber, onClick}) => (
        <div> 
            <Paper className= "gamePaper" >
                <h1>New Round! </h1>
                <div className="row">
                    {
                    (roundNumber===1) ? (ROUND1_DESC) 
                    : (roundNumber===2) ? (ROUND2_DESC)
                    : (ROUND3_DESC)
                    }
                </div>
                <Button 
                variant="outlined" 
                color="primary" 
                onClick={onClick}> 
                Start round {roundNumber} </Button>
            </Paper>
        </div>
    )

export default RoundCard;