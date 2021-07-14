const messages = (state, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages:action.payload
            }
        case 'DELETE_MESSAGE':
            return {

            }
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'EDIT_MESSAGE':
            return {

            }
        case 'SET_LIKE':
            return {

            }
    }
}