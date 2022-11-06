import React from 'react';
import {store} from '../../index';

function MessageView() {

    const messages = store.getState().messages;

    const handleDeleteMessage = (index) => {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            index: index
        });
    }

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
                {
                    messages.map((message, index) => {
                        return (
                            <li  onClick={() => handleDeleteMessage(index)} key={index}>
                                <div className="form-check"> 
                                    <label className="form-check-label"> 
                                        {message}
                                    </label> 
                                </div> 
                                <i class="remove mdi mdi-close-circle-outline"></i>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default MessageView;
