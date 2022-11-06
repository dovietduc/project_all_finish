function MessageReducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message),
        };
    } else if (action.type === 'DELETE_MESSAGE') {
        state = state.messages.filter(function(currentValue, index){
            return index !== action.index;
        });
        return {
            messages: state
        }
    } else {
        return state;
    }
}

export default MessageReducer;
