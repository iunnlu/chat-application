import React from 'react';
import {withChatkit} from '@pusher/chatkit-client-react';

const Deneme = withChatkit(props => {
    console.log(props.chatkit)
    return(
        <div>

        </div>
    )
})

export default Deneme;