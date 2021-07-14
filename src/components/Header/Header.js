import React from 'react';
import { Toolbar, Badge } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';
import {connect} from "react-redux";

const IconsStyle = {
    marginLeft: "30px"
}


const Header = ({ messages }) => {
    let numberOfMessages = messages.length;
    let participants = Array.from(new Set(messages.map((item) => item.userId))).length;


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
                <Typography align="right" variant="h6" style={IconsStyle}>   My Chat!   </Typography>
            </Toolbar>
        </AppBar>
    )
}



const stateToProps = state => ({
    messages: state.messages
})


export default connect(stateToProps, null)(Header);