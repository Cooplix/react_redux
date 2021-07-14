const messages = (state, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages:action.payload
            }

        case 'DELETE_MESSAGE':
            return {
                ...state,
                messages: state.messages.filter(ms => ms.id !== action.payload)
            }

        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        case 'EDIT_MESSAGE':
            return {
                ...state,
                messages: state.messages.map(
                    ms =>
                    ms.id === action.payload.id ? action.payload : ms)
            }

        case 'SET_LIKE':
            return {
                ...state,
                messages: state.messages.map(
                    ms =>
                        ms.id === action.payload.id ? action.payload : ms)
            }

        default:
            return state;
    }
}

export default messages;