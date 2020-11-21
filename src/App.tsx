import * as React from 'react';
import './App.css';
import ToDoList from './components/body/toDoList/ToDoList';
import HeaderContainer from './components/header/HeaderContainer';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <HeaderContainer />
            <ToDoList />
        </div>
    );
};

export default App;
