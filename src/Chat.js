import React, { Component } from 'react';
import Messages from '../src/data/message';
import Header from './components/Header';
import MessageInput from './components/MessageInput/MessageInput';
import MessageList from './components/MessageList';
import Container from '@material-ui/core/Container';


const ContainerStyle = {
    background: "#F0F8FF",
    maxHeight: "100%"
}

function removeFromArr(array, id) {
    let tempArr = [];
    for(let i = 0; i < array.length; i++) {
        if(i !== id) {
            tempArr.push(array[i]);
        }
    }

    return tempArr;
}

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: Messages,
            messagesLength: Messages.length,
            currentUser: {
                user: "Vadym",
                userId: "1234567",
                avatar: null
            },
            messageToEditIndex: {},
            isEditMode: false
        };
        this.receiveMessage = this.receiveMessage.bind(this);
        this.likeMessage = this.likeMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.editModeHander = this.editModeHander.bind(this);
        this.editMessage = this.editMessage.bind(this);
    }

    receiveMessage(message) {
        console.log("Catched message: ", message.text);
        this.state.messages.push(message);
        this.setState({messagesLength: this.state.messages.length})
        console.log("this.state.messages 2: ", this.state.messages);
    }

    likeMessage(id) {
        const newArr = [...this.state.messages];
        newArr[id].isLiked = !this.state.messages[id].isLiked;

        this.setState({messages: newArr});
    }

    editModeHander(id) {
        this.setState({
            messageToEditIndex: id,
            isEditMode: true
        });
    }

    editMessage(newMessage) {
        const {messages, messageToEditIndex} = this.state;

        const newArr = [...messages];
        newArr[messageToEditIndex] = newMessage;

        this.setState({
            messages: newArr,
            messageToEditIndex: null,
            isEditMode: false
        });
    }

    deleteMessage(id) {
        let tempArr = removeFromArr([...this.state.messages], id);

        this.setState({messages: tempArr});
    }

    render() {
        const {
            messages,
            messagesLength,
            currentUser,
            messageToEditIndex,
            isEditMode
        } = this.state;

        return(
            <div>
                <Container style={ContainerStyle}>
                    <Header messages={messages}/>
                    <h1>Hi</h1>
                    <MessageList
                        numberOfMessages={messagesLength}
                        messages={messages}
                        currentUser={currentUser}
                        likeMessageHandler={this.likeMessage}
                        deleteMessageHandler={this.deleteMessage}
                        editModeHandler={this.editModeHander}
                    />
                    <MessageInput
                        addMessageHandler={this.receiveMessage}
                        currentUser={currentUser}
                        editMessageHandler={this.editMessage}
                        isEditMode={isEditMode}
                        messageToEdit={messages[messageToEditIndex]}
                    />
                </Container>
            </div>
        )
    }
}

export default Chat;