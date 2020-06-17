import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SvgIcon from "@material-ui/core/SvgIcon";
import './Players.css';
import RouterButton from '../containers/RouterButton.js'
import WordInput from '../containers/WordInput'

export default function Words () {
    return (
        <div>
            <h1>Words</h1>
            <WordInput />
            <RouterButton  whereTo={"/round1"} buttonName="Start playing!"/> 
        </div>            
    );
}