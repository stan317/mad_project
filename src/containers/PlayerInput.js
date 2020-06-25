import React from 'react'
import {addPlayer} from '../actions'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const PlayerInput = ({dispatch}) => {
    let input
    return(
        <div>
            <form className="my-form" 
                onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addPlayer(input.value))
                input.value = ''
            }}>
                <TextField label="Player's name" variant="outlined" color="secondary"
                    inputRef={node => input = node}/>
                <IconButton type="submit">
                    <AddCircleOutlineIcon color="secondary" />
                </IconButton>     
            </form>
        </div>
    )

}

export default connect()(PlayerInput)