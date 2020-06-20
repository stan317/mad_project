import React from 'react';
import './Teams.css';
import Grid from '@material-ui/core/Grid';
import TeamList from '../containers/TeamList.js';
import RouterButton from '../components/RouterButton.js'


const Teams =() => {
    return (
        <div>
            <h1>Teams</h1>
            <Grid container className="my-grid">
                <TeamList team={1} />
                <TeamList team={2} />
            </Grid>
            <RouterButton whereTo={"/words"} buttonName="Write my words" />
        </div>
    );
}

export default Teams;