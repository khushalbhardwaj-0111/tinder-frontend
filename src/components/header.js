import React from 'react';
import './css/header.css';
import PersonIcon from '@material-ui/icons/Person';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import IconButton from '@material-ui/core/IconButton';

function header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className='PersonIcon'/>
            </IconButton>
            <WhatshotIcon className='TinderIcon' />
            <IconButton>
                <ChatBubbleOutlineIcon className='ChatIcon' />
            </IconButton>
        </div>
    )
}

export default header
