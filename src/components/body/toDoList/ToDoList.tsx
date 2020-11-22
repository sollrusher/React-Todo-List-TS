import React from 'react';
import { PropsToDoList } from '../../../entities/propsInterface/PropsToDoList';
import NewToDoItem from './NewToDoList/NewToDoItem';
import ToDoItem from './toDoItem/ToDoItem';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

const ToDoList: React.FC<PropsToDoList> = ({ newToDo, onAddToDoChange, toDoItem }: PropsToDoList) => {
    return (
        <section className="toDoList">
            <NewToDoItem newToDo={newToDo} onAddToDoChange={onAddToDoChange} />
            <ToggleAllToDoList />
            <ToDoItem toDoItem={toDoItem} />
        </section>
    );
};
export default ToDoList;
