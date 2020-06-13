import React from 'react';
import Button from '@material-ui/core/Button';
import logo from '../logo.svg';
import { Link as RouterLink} from "react-router-dom";
import './Players.js';

const Welcome =() => {
    return (
        <div>
            <img src={logo} alt={logo} width='30%' />
            <div>
                <Button title='Play' variant="outlined" color="text.primary" component={RouterLink} to="/players">
            Play Time's up!
                </Button> 
            </div>
        </div>
    );
};

export default Welcome;