import { CHAT_CONTENT, SELECTED_ROOM } from './types';

export const chatContent = (id) => async (dispatch, getState) => {
    const currentUser = getState().loginUser.currentUser;
    let array = [];
    await currentUser.subscribeToRoomMultipart({
        roomId: id,
        hooks: {
            onMessage: message => {
                array.push(message)
            }
        }
    });
    //array = array.filter( (value, index, self) => self.map(item => item.id).indexOf(value.id) === index );
    dispatch({
        type: CHAT_CONTENT,
        payload: array
    })
    dispatch({
        type: SELECTED_ROOM,
        payload: id
    })
}