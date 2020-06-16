import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink} from "react-router-dom";


export default function RouterButton(props) {
    return (
        <div>
            <Button variant="outlined" color="text.primary" component={RouterLink} to={props.whereTo}> 
            {props.buttonName}
            </Button>
        </div>
    );
}

