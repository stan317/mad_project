import React from 'react';
import './Players.css';
import WordInput from '../containers/WordInput'
import StartPlayingButton from '../containers/StartPlayingButton'

export default function Words () {
    return (
        <div>
            <h1>Words</h1>
            <WordInput />
            <StartPlayingButton/> 
        </div>            
    );
}