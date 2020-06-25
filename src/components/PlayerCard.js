import React from "react";
import { Paper, Button } from "@material-ui/core";


const RoundCard = ({player, team, onClick}) => (
        <div>
            <Paper className= "gamePaper" >
                <h1>Team {team}</h1>
                <div className="row">
                    <h2>{player}'s turn</h2>
                </div>
                <Button onClick={onClick} color="primary" variant="outlined"> start </Button>
            </Paper>
        </div>
    )

export default RoundCard;