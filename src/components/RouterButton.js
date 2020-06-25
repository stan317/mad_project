import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as RouterLink} from "react-router-dom";
//import theme from "../theme.js";


export default function RouterButton(props) {
    return (
        <div>
            <Button variant="outlined" component={RouterLink} to={props.whereTo} 
            onClick={props.onClick}
            disabled={props.disabled}
            // ButtonProps={{
            //     classes: {
            //     root: theme.cssOutlined,
            //     notchedOutline: theme.notchedOutline,
            //     }
            //}}
            >
            {props.buttonName}
            </Button>
        </div>
    );
}

