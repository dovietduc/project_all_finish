function createStore(reducer, intialState){

    let state = intialState;
    let listeners = [];

    const dispatch = function(action) {
        // logic here -- thay doi state theo action
        state = reducer(state, action);
        // khi state thay doi -> render view
        // function nao day de kich hoat render view
        for(let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    const subscribe = function (listener) {
        listeners.push(listener);
    }

    const getState = function() {
        return state;
    }

    return {
        dispatch,
        getState,
        subscribe
    }

}

export default createStore;