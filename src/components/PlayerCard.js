import React from "react";
import { Paper, Button } from "@material-ui/core";


const RoundCard = ({player, team, onClick}) => (
        <div>
            
            <Paper className= "paper" >
                <h1>Team {team}</h1>
                <div className="row">
                    {player}'s turn
                </div>
                <Button onClick={onClick}> start </Button>
            </Paper>
        </div>
    )

export default RoundCard;