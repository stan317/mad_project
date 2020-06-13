import React from 'react';
import '../App.css';
import theme from '../theme.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link as RouterLink} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';

function new_line () {
    return (
        <div>
            <form>
                <TextField label="Player's name" variant="outlined" color="secondary" />
            </form>
        </div>
    );
}

function Players () {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>
                Players
                </h1>
                <p color='secondary'>Number of players: </p>
                <div>
                    <form>
                        <TextField label="Player's name" variant="outlined" color="secondary" />
                        <br/>
                        <br/>
                        <Button onClick={() => {new_line() }} variant="outlined">
                            <SvgIcon>
                                <path 
                                fill-rule="evenodd"
                                d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"
                                clip-rule="evenodd"
                                />
                            </SvgIcon>
                            Add Player
                        </Button>   
                    </form>
                </div>
                    <br/>
                    <Button variant="outlined" color="text.primary" component={RouterLink} to="/teams">
                    Create Teams
                    </Button> 
            </div>
        </ThemeProvider>
    );
}
export default Players;