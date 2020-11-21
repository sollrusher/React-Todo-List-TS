import React from 'react';
import './App.css';
import ToDoListContainer from './components/body/toDoList/ToDoListContainer';
import Header from './components/header/Header';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Header />
            <ToDoListContainer />
        </div>
    );
};

export default App;
