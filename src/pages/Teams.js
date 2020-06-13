import React from 'react';
import { Link as RouterLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Teams () {
    return (
        <div>
            <h1>Teams</h1>
            <Button variant="outlined" color="text.primary" component={RouterLink} to="/words">
                    Write my words
            </Button> 
        </div>
    );
}