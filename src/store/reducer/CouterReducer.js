function CouterReducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.payload;
    } else if (action.type === 'DECREMENT') {
        return state - action.payload;
    }
}

export default CouterReducer;
