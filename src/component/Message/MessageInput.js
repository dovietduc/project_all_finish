import {useState} from 'react';
import { store } from '../../index';

function MessageInput() {

    const [message, setMessage] = useState('');

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = () => {
        store.dispatch({
          type: 'ADD_MESSAGE',
          message: message,
        });
        setMessage('');
    };


    return (
        <div className="add-items d-flex">
            <input
                onChange={handleChangeMessage}
                value={message}
                type="text"
                className="form-control todo-list-input"
                placeholder="What do you need to do today?"
            />
            <button
                type="submit"
                onClick={handleSubmit}
                className="add btn btn-primary font-weight-bold todo-list-add-btn"
            >
                Submit
            </button>
        </div>
    );
}

export default MessageInput;
