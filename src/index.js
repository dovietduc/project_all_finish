import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateStore from './store/CustomStore';
import CouterReducer from './store/reducer/CouterReducer';
import MessageReducer from './store/reducer/MessageReducer';


// set up store
const intialState = { 
    messages: []
}
export const store = CreateStore(MessageReducer, intialState);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
