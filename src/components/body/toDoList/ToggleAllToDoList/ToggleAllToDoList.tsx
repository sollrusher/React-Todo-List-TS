import React from 'react';

const ToggleAllToDoList = (): JSX.Element => {
    return (
        <div>
            <input type="checkbox" className="toDoList__toggle-all" id="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
    );
};
export default ToggleAllToDoList;
