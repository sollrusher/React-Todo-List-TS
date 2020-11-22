import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataContext } from './Data/DataContext';
import { initialState } from './Data/InitialState';
import { State } from './entities/state/State';
import { Action, ContextState } from './entities/action/Action';
import { toDoReducer } from './Reducer/toDoReducer';

const [state, changeState] = useReducer<React.Reducer<State, Action>>(toDoReducer, initialState);

const ContextState: ContextState = {
    state,
    changeState,
};

ReactDOM.render(
    <React.StrictMode>
        <DataContext.Provider value={ContextState}>
            <App />
        </DataContext.Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
