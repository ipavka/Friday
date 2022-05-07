import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {SelfRouter} from "./routes/SelfRouter";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <SelfRouter/>
            </HashRouter>
        </div>
    )
};

export default App;
