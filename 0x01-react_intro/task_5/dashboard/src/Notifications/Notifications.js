import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    return (
        <div className='Notifications'>
            <button style={{ position: 'absolute', top: 0, right: 0 }} aria-label='Close' onClick={handleClick}>
                <img src={require('../assets/close-icon.png')} alt='Close Icon'/>
            </button>
            <p>Here is the list of notificaions</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={getLatestNotification()}/>
            </ul>
        </div>
    )
}

function handleClick(){
    console.log("Close button has been clicked")
}

export default Notifications;