import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter/Counter';
import {useState} from 'react';
import {store} from './index';
import MessageInput from './component/Message/MessageInput';
import MessageView from './component/Message/MessageView';


function App() {

    const [flagReRender, setFlagReRender] = useState(false);

    store.subscribe(function(){
        setFlagReRender(!flagReRender);
    });

   
    return (
        <div className="App mt-5">
            <div className="container">
                <div class="row container d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 class="card-title">Awesome Todo list</h4>
                                <MessageInput/>
                                <MessageView/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default App;
