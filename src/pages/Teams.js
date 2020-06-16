import React from 'react';
import './Teams.css';
import Grid from '@material-ui/core/Grid';
import TeamList from '../containers/TeamList.js';
import RouterButton from '../containers/RouterButton.js'


const Teams =() => {
    return (
        <div>
            <h1>Teams</h1>
            <Grid container direction="row" justify="space-around" alignItems="flex-start">
                <TeamList teamName="Team 1" teamComposition={["kevzer", "jtlabg", "a", "b", "f"]}/>
                <TeamList teamName="Team 2" teamComposition={["stanpd", "laftaichung"]}/>
            </Grid>
            <RouterButton whereTo={"/words"} buttonName="Write my words" />
        </div>
    );
}

export default Teams;