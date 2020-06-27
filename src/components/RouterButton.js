import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink} from "react-router-dom";


export default function RouterButton(props) {
    return (
        <div>
            <Button color={props.color} variant="outlined" component={RouterLink} to={props.whereTo} 
            onClick={props.onClick}
            disabled={props.disabled}
            size="large"
            margin-top="20px"
            >
            {props.buttonName}
            </Button>
        </div>
    );
}

