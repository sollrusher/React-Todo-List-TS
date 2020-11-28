import React from 'react';
//import { PropsToggleAllToDoList } from '../../../../entities/propsInterface/PropsToggleAllToDoList';

const ToggleAllToDoList: React.FC = () => {
    return (
        <div className="toDoList__toggleAll">
            <input type="checkbox" className="toDoList__toggle-all" id="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
    );
};
export default ToggleAllToDoList;
