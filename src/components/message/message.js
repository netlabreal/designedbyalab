import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './message.css';

const Message = (props) => {
    const {color, text, active, close} = props;

    return (
        <Snackbar
            variant="success"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={active}
            autoHideDuration={4000}
            onClose={close}
        >
            <SnackbarContent style={{backgroundColor: color}}
                             message={text}
                             action={[
                                 <IconButton
                                     key="close"
                                     aria-label="close"
                                     color="inherit"
                                     onClick={close}
                                 >
                                     <CloseIcon/>
                                 </IconButton>,
                             ]}>
            </SnackbarContent>
        </Snackbar>
    );
}

Message.defaultProps = {
    color: 'green',
    text: '',
    active: false
}


export default Message;