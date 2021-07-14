import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './inputstyle.css'
import {connect} from "react-redux";
import {addMessage, editMessage, setLike, deleteMessage, getMessages} from "../../redux/actions";


const InputStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
}

function createUUID() {
    return 'Stoxx-rexx-4xxx-rexx-Flexbox'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const MessageInput = ({
                          addMessageHandler,
                          currentUserProps,
                          messageToEdit = null,
                          editMessageHandler,
                      }) => {
    const [message, setMessage] = useState("");



    const fullMessageObject = {

        ...currentUserProps,
        "id": 0,
        "text": "",
        "createdAt": new Date().toUTCString(),
        "editedAt": ""
    }

    const newMessage  = {
            ...fullMessageObject,
            text: message,
            id: createUUID()
    }

    const editMessage = () => {
        editMessageHandler({
            ...fullMessageObject,
            text: message
        });
        setMessage(null);
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div style={InputStyle}>
            <TextField
                id="outlined-helperText"
                className="textArea"
                placeholder="Write your message here"
                value={message}
                variant="outlined"
                onChange={handleChange}
            />
            <Button
                variant="contained"
                className="inputButton"
                color="primary"
                onClick={ () => addMessageHandler(newMessage) }
            >
                {"Send"}
            </Button>
        </div>
    )
}

const dispatchToProps = state => ({
    addMessageHandler: addMessage,
    editMessage: editMessage
})

const stateToProps = state => ({
    currentUserProps: state.currentUser,
})

export default connect(dispatchToProps, stateToProps)(MessageInput);