import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Card, Avatar, CardContent, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

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

const CardFotterChildStyle = {
    flex: "1"
}

const MessageList = ({ messages, numberOfMessages, currentUser, likeMessageHandler, editModeHandler, deleteMessageHandler }) => {

    const [isLiked, setIsLiked] = useState(false);

    return(
        <Container>
            <div className="MessageList">
                <h3>This is message list </h3>
                {
                    numberOfMessages ? messages.map((item, i) => {
                        const isCurrentUser = currentUser.userId === item.userId;
                        const divForCard = isCurrentUser ? rightForCurrentUser : null;
                        return(

                            <div style={divForCard} >
                                <Card style={CardsStyle}>
                                    <CardContent>
                                        <div style={userAvatarAndNameStyle}>
                                            {
                                                !isCurrentUser && (
                                                    <Avatar src={item.avatar} style={AvatarStyle}/>
                                                )
                                            }
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {item.user}
                                            </Typography>
                                        </div>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {item.text}
                                        </Typography>
                                        <div style={CardFooter}>
                                            <div style={CardFotterChildStyle} >
                                                {
                                                    !isCurrentUser && (
                                                        <IconButton onClick={() => {likeMessageHandler(i)}} >
                                                            <FavoriteIcon color={item.isLiked ? "secondary" : "action"} />
                                                        </IconButton>
                                                    )
                                                }
                                                {
                                                    isCurrentUser && (
                                                        <IconButton onClick={() => {deleteMessageHandler(i)}}>
                                                            <DeleteIcon  />
                                                        </IconButton>
                                                    )
                                                }
                                                {
                                                    isCurrentUser && (
                                                        <IconButton  onClick={() => {editModeHandler(i)}}>
                                                            <CreateIcon/>
                                                        </IconButton>
                                                    )
                                                }
                                            </div>
                                            <Typography align="right" variant="body2" color="textSecondary" style={CardFotterChildStyle}>
                                                {item.createdAt}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    }) : <div>No messages in this chat</div>
                }
            </div>
        </Container>
    )
}



export default MessageList;