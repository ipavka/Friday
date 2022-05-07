import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {SelfRouter} from "./routes/SelfRouter";
import {Header} from "./header/Header";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <SelfRouter/>
            </HashRouter>
        </div>
    )
};

export default App;
