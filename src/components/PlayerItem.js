import React from 'react'
import Button from '@material-ui/core/Button';

const PlayerItem = ({name, OnClick}) => (
    <div>
        <label>
            {name}
        </label>
        <Button className="destroy"
            onClick = {OnClick}>
                delete
            </Button>
    </div>
)

export default PlayerItem