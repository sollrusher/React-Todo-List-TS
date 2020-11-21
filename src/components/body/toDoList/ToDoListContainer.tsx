import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDoListContainer = (): JSX.Element => {
    const toDoItem: string[] = [];
    const [newToDo, setToDo] = useState<string>('');

    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
        toDoItem.push(newToDo);
    };

    return (
        <section className="toDoList">
            <ToDoList newToDo={newToDo} onAddToDoChange={onAddToDoChange} toDoItem={toDoItem} />
        </section>
    );
};
export default ToDoListContainer;
