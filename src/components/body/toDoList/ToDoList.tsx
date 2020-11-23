import React from 'react';
import { PropsToDoList } from '../../../entities/propsInterface/PropsToDoList';
import NewToDoItem from './NewToDoList/NewToDoItem';
import ToDoItem from './toDoItem/ToDoItem';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

const ToDoList: React.FC<PropsToDoList> = ({ newToDo, onAddToDoChange, toDoListItems }: PropsToDoList) => {
    const toDoItemComponent = toDoListItems?.map((toDoItem, i) => (
        <ToDoItem key={i} toDoItem={toDoItem.name} isDone={toDoItem.isDone} />
    ));

    return (
        <section className="toDoList">
            <NewToDoItem newToDo={newToDo} onAddToDoChange={onAddToDoChange} />
            <ToggleAllToDoList />
            {toDoItemComponent}
        </section>
    );
};
export default ToDoList;
