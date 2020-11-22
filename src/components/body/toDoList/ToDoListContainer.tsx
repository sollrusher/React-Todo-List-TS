import React, { useState, useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ToDoItem } from '../../../entities/state/ToDoItem';
import ToDoList from './ToDoList';

const ToDoListContainer: React.FC = () => {
    const state = useContext(DataContext);

    const toDoItem: ToDoItem | undefined = state.toDoList;
    const toggle: boolean | undefined = state.toggle;
    const [newToDo, setToDo] = useState<string>('');

    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
        // toDoItem?.push({ name: newToDo, flag: false });
    };

    return (
        <section className="toDoList__container">
            <ToDoList newToDo={newToDo} onAddToDoChange={onAddToDoChange} toDoItem={toDoItem} />
        </section>
    );
};
export default ToDoListContainer;
