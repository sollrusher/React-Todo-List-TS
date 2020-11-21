import React from 'react';
import NewToDoList from './NewToDoList/NewToDoList';
import ToDoItem from './toDoItem/ToDoItem';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

interface Props {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    toDoItem: string[];
}

const ToDoList = ({ newToDo, onAddToDoChange, toDoItem }: Props): JSX.Element => {
    return (
        <section className="toDoList">
            <NewToDoList newToDo={newToDo} onAddToDoChange={onAddToDoChange} />
            <ToggleAllToDoList />
            <ToDoItem toDoItem={toDoItem} />
        </section>
    );
};
export default ToDoList;
