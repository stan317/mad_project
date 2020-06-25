import React from 'react'
import {addWord} from '../actions'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const WordInput = ({testw, wordCount, dispatch}) => {
    let input
    return(
        <div>
            <p>Number of words: {wordCount} {testw}</p>
            <form className="my-form" 
                onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addWord(input.value))
                input.value = ''
            }}>
                <TextField label="New word" variant="outlined" color="secondary"
                    inputRef={node => input = node}/>
                <IconButton type="submit">
                    <AddCircleOutlineIcon color="secondary"></AddCircleOutlineIcon>
                </IconButton>     
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    wordCount: state.wordList.list.length,
    testw: state.wordList.currentWord.word
})

export default connect(mapStateToProps)(WordInput)