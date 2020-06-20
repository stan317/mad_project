import React from "react";
import {ROUND1_DESC} from '../constants';
import {ROUND2_DESC} from '../constants';
import {ROUND3_DESC} from '../constants';
import './RoundCard.css';

const RoundCard = ({roundNumber}) => (
        <div>
            <h1>Round {roundNumber} </h1>
            <div className= "round" >
                <h2 className= "underline" >
                   Rules:
                </h2>
                <div>
                   choix de round avec ? et :
                </div>
            </div>
        </div>
    )

export default RoundCard;