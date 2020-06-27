import React from 'react'
import {addWord} from '../actions'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const WordInput = ({wordCount, dispatch}) => {
    let input
    return(
        <div>
            <p>Number of words: {wordCount}</p>
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
    wordCount: state.wordList.list.length
})

export default connect(mapStateToProps)(WordInput)