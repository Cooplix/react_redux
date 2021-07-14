import React, {useState} from 'react';
import {connect} from 'react-redux';
import { editMessage, toogleEditWindow } from '../../redux/actions';
import {Modal} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function EditMs ({message, propsEditMessage, closeModal}) {

    const [value, setValue] = useState(message.text);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const modalStyle = {
        marginTop: "80px",
        marginLeft: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const textFieldStyle = {
        background: "white",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px"
    }

    const buttonStyle = {
        marginLeft: "10px"
    }

    return (
        <Modal open onClose={ () => closeModal( {} ) } style={modalStyle}>
            <div style={textFieldStyle}>
                <TextField
                    multiline
                    value={value}
                    onChange={handleChange}
                />

                <Button style={buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={ () => {propsEditMessage(message, value); closeModal( {} ) } }>
                    Edit
                </Button>
            </div>
        </Modal>
    )
}

const stateToProps = state => ({
    message: state.editMessage
})

const dispatchToProps = {
    propsEditMessage: editMessage,
    closeModal: toogleEditWindow
}

export default connect(stateToProps, dispatchToProps)(EditMs);