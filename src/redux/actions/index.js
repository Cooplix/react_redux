import Messages from "../../data/message";

export const getMessages = () => ({
    type: 'GET_MESSAGES',
    payload: Messages
})

export const deleteMessage = message => ({
    type: 'DELETE_MESSAGE',
    payload: message.id
})

export const  addMessage = message => ({
    type: 'ADD_MESSAGE',
    payload: message
})

export const  editMessage = (message, body) => ({
    type: 'EDIT_MESSAGE',
    payload: {...message, text: body}
})

export const  setLike = message => ({
    type: 'EDIT_MESSAGE',
    payload: {...message, isLiked: !message.isLiked}
})