import {CHAT_CONTENT} from './types';

export const writeMessage = (message) => async (dispatch, getState) => {
    const currentUser = getState().loginUser.currentUser;
    const selectedRoom = getState().selectedRoom.room;
    const array = [];
    console.log(currentUser)
    await currentUser.sendSimpleMessage({
        text: message,
        roomId: selectedRoom
    })
    await currentUser.subscribeToRoomMultipart({
        roomId: selectedRoom,
        hooks: {
            onNewMessage: message => {
                console.log(message)
            }
        }
    });
    console.log(array)
    dispatch({
        type: CHAT_CONTENT,
        payload: array
    })
}