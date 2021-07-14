import React, { useState } from 'react';
import {connect} from "react-redux";
import Container from '@material-ui/core/Container';
import { Typography, Card, Avatar, CardContent, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import {addMessage, deleteMessage, editMessage, getMessages, setLike} from "../redux/actions";

const CardsStyle = {
    width: "60%",
    marginTop: "10px"
}

const rightForCurrentUser = {
    display: "flex",
    justifyContent: "flex-end"
}

const userAvatarAndNameStyle = {
    display: "flex",
    justifyContent: "flex-begin",
    marginBottom: "10px"
}

const AvatarStyle = {
    marginRight: "10px"
}

const CardFooter = {
    width: "100%",
    display: "flex",
    alignItems: "center"
}

const CardFooterChildStyle = {
    flex: "1"
}

const MessageList = ({
                         messages,
                         currentPropsUser,
                         likeMessageHandler,
                         isEditWindow,
                         deleteMessageHandler,
                         editModeHandler,
                     }) => {

    return(
        <Container>
            <div className="MessageList">
                <h3>This is message list </h3>
                {
                    messages.map(message => {
                        const isCurrentUser = currentPropsUser.userId === message.userId;
                        const divForCard = isCurrentUser ? rightForCurrentUser : null;
                        return(

                            <div style={divForCard} >
                                <Card style={CardsStyle}>
                                    <CardContent>
                                        <div style={userAvatarAndNameStyle}>
                                            {
                                                !isCurrentUser && (
                                                    <Avatar src={message.avatar} style={AvatarStyle}/>
                                                )
                                            }
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {message.user}
                                            </Typography>
                                        </div>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {message.text}
                                        </Typography>
                                        <div style={CardFooter}>
                                            <div style={CardFooterChildStyle} >
                                                {
                                                    !isCurrentUser && (
                                                        <IconButton onClick={() => {likeMessageHandler(message)}} >
                                                            <FavoriteIcon color={message.isLiked ? "secondary" : "action"} />
                                                        </IconButton>
                                                    )
                                                }
                                                {
                                                    isCurrentUser && (
                                                        <IconButton onClick={() => {deleteMessageHandler(message)}}>
                                                            <DeleteIcon  />
                                                        </IconButton>
                                                    )
                                                }
                                                {
                                                    isCurrentUser && (
                                                        <IconButton  onClick={() => {editModeHandler(message)}}>
                                                            <CreateIcon/>
                                                        </IconButton>
                                                    )
                                                }
                                            </div>
                                            <Typography align="right" variant="body2" color="textSecondary" style={CardFooterChildStyle}>
                                                {message.createdAt}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            {isEditWindow}
        </Container>
    )
}

const mapStateToProps = state => ({
    currentUserProps: state.currentUser,
    messages: state.messages,
    isEditWindow: Boolean(state.editMessage.id)
})

const dispatchToProps = {
    editModeHandler: toogleEditWindow,
    addMessage: addMessage(),
    deleteMessageHandler: deleteMessage(),
    likeMessageHandler: setLike()
}

export default connect(mapStateToProps, dispatchToProps)(MessageList);