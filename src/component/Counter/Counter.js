import React from 'react';
import {store} from '../../index';

function Counter() {


    const handleIncrement = () => {
        store.dispatch({
            type: 'INCREMENT',
            payload: 2
        });
    }

    const handleDecrement = () => {
        store.dispatch({
            type: 'DECREMENT',
            payload: 1
        });
    }
    return (
        <div>
            Current count: {store.getState()}
            <hr />
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;
