import React, { Component } from 'react';
import Messages from '../src/data/message';
import Header from './components/Header/Header';
import MessageInput from './components/MessageInput/MessageInput';
import MessageList from './components/MessageList/MessageList';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {getMessages} from './redux/actions';


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
            isEditMessage: false
        };
        this.receiveMessage = this.receiveMessage.bind(this);
        this.likeMessage = this.likeMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.editModelHandler = this.editModelHandler.bind(this);
        this.editMessage = this.editMessage.bind(this);
    }

    receiveMessage(message) {
        this.state.messages.push(message);
        this.setState({messagesLength: this.state.messages.length})
    }

    likeMessage(id) {
        const newArr = [...this.state.messages];
        newArr[id].isLiked = !this.state.messages[id].isLiked;

        this.setState({messages: newArr});
    }

    editModelHandler(id) {
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

    componentDidMount() {
        const {getMessagesHandler} = this.props;
        getMessagesHandler();
        setTimeout(() => {this.setState({isLoading: false})}, 200);
    }


    render() {

        return(
            <div>
                <Header />

                <Container style={ContainerStyle}>
                    <MessageList/>
                </Container>

                <div style={inputMessageStyle}>
                    <MessageInput style={inputMessageStyle}/>
                </div>

            </div>
        )
    }
}

const inputMessageStyle = {
    width: "100%",
    background: "#ffffff",
    boxShadow: "0 0 5px rgba(0,0,0,0.3)"
}

const stateToProps = (state) => ({
    ...state
})

const dispatchToProps = {
    getMessagesHandler: getMessages
}

export default connect(stateToProps, dispatchToProps)(Chat);