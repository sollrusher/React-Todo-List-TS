import React from 'react';
import { PropsToggleAllToDoList } from '../../../../entities/propsInterface/PropsToggleAllToDoList';

const ToggleAllToDoList: React.FC<PropsToggleAllToDoList> = ({ toggleReadiness }: PropsToggleAllToDoList) => {
    return (
        <div>
            <input type="checkbox" className="toDoList__toggle-all" id="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
    );
};
export default ToggleAllToDoList;
