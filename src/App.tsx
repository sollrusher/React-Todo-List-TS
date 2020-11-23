import React, { useReducer } from 'react';
import './App.css';
import ToDoListContainer from './components/body/toDoList/ToDoListContainer';
import Header from './components/header/Header';
import { DataContext } from './Data/DataContext';
import { initialState } from './Data/InitialState';
import { Action, ContextState } from './entities/action/Action';
import { State } from './entities/state/State';
import { toDoReducer } from './Reducer/toDoReducer';

const App: React.FunctionComponent = () => {
    const [state, changeState] = useReducer<React.Reducer<State, Action>>(toDoReducer, initialState);

    const contextState: ContextState = {
        state,
        changeState,
    };

    return (
        <DataContext.Provider value={contextState}>
            <div className="App">
                <Header />
                <ToDoListContainer />
            </div>
        </DataContext.Provider>
    );
};

export default App;
