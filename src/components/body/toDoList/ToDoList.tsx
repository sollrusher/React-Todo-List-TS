import React, { memo } from 'react';
import { PropsToDoList } from '../../../entities/propsInterface/PropsToDoList';
import ToggleAllToDoList from './ToggleAllToDoList/ToggleAllToDoList';

const ToDoList: React.FC<PropsToDoList> = ({ toDoItemComponent, toggleAllReadiness }: PropsToDoList) => {
    return (
        <section className="toDoList hidden">
            <ToggleAllToDoList toggleAllReadiness={toggleAllReadiness} />
            {toDoItemComponent}
        </section>
    );
};
export default memo(ToDoList);
