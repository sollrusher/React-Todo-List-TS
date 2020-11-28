import React from 'react';
import { PropsToDoList } from '../../../entities/propsInterface/PropsToDoList';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

const ToDoList: React.FC<PropsToDoList> = ({ toDoItemComponent }: PropsToDoList) => {
    return (
        <section className="toDoList hidden">
            <ToggleAllToDoList />
            {toDoItemComponent}
        </section>
    );
};
export default ToDoList;
