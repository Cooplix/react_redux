import {createStore} from "redux";
import rootReducer from "../redux/reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const initialState = {
    messages: [],
    messagesLength: 0,
    currentUser: {
        user: "Vadym",
        userId: "1234567890",
        avatar: null
    },

    isLoading: true,
    editMessage: {}
}

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;