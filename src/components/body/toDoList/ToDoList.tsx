import React from 'react';
import { PropsToDoList } from '../../../entities/propsInterface/PropsToDoList';
import NewToDoItem from './NewToDoList/NewToDoItem';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

const ToDoList: React.FC<PropsToDoList> = ({ newToDo, onAddToDoChange, addToDo, toDoItemComponent }: PropsToDoList) => {
    return (
        <section className="toDoList">
            <NewToDoItem newToDo={newToDo} onAddToDoChange={onAddToDoChange} addToDo={addToDo} />
            <ToggleAllToDoList />
            {toDoItemComponent}
        </section>
    );
};
export default ToDoList;
