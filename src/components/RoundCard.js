import React from "react";
import {ROUND1_DESC} from '../constants';
import {ROUND2_DESC} from '../constants';
import {ROUND3_DESC} from '../constants';
import './RoundCard.css';
import { Paper } from "@material-ui/core";

const RoundCard = ({roundNumber}) => (
        <div>
            
            <Paper className= "paper" >
                <h1>New Round! </h1>
                <div className="row">
                    {
                    (roundNumber===1) ? (ROUND1_DESC) 
                    : (roundNumber===2) ? (ROUND2_DESC)
                    : (ROUND3_DESC)
                    }
                </div>
            </Paper>
        </div>
    )

export default RoundCard;