import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear';

const PlayerItem = ({name, OnClick}) => (
    <div>
        <label>
            {name}
        </label>
        <IconButton
            onClick = {OnClick}
            aria-label="delete"
            size = "small">
                <ClearIcon color="secondary" fontSize="small"/>
            </IconButton>
    </div>
)

export default PlayerItem