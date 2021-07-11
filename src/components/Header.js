import React from 'react';
import { Toolbar, Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';

const IconsStyle = {
    marginLeft: "30px"
}


const Headder = ({ messages }) => {
    let numberOfMessages = messages.length;
    let participants = Array.from(new Set(messages.map((item) => item.userId))).length;
    let lastMessageIn = null;

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography>
                    <Badge badgeContent={numberOfMessages} color="secondary" style={IconsStyle}>
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={participants} color="secondary" style={IconsStyle}>
                        <PeopleIcon />
                    </Badge>
                </Typography>
                <Typography align="right" variant="h6" style={IconsStyle}>   Bsa Chat!   </Typography>
            </Toolbar>
        </AppBar>
    )
}

const lastMessage = () => {
    return null;
}

export default Headder;