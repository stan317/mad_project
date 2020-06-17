import React from 'react';
import './Players.css';
import RouterButton from '../components/RouterButton.js'
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