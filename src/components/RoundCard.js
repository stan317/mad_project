import React from "react";
import {ROUND1_DESC} from '../constants';
import './RoundCard.css';

const RoundCard = ({roundNumber}) => (
        <div>
            <h1>Round {roundNumber} </h1>
            <div className= "round" >
                <h2 textDecoration="underline" >
                   Rules:
                </h2>
                <div>
                    {ROUND1_DESC }
                </div>
            </div>
        </div>
    )

export default RoundCard;