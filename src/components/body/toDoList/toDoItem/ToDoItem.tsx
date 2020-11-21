import React from 'react';

interface Props {
    toDoItem: string[];
}

const ToDoItem = ({ toDoItem }: Props): JSX.Element => {
    const viewtoDoItem = toDoItem.map((a) => a);
    return (
        <div>
            <ul className="toDoList__list">
                <li className="toDoList__item">
                    <div className="toDoList__view">
                        <input type="checkbox" className="toDoList__toggle" />
                        <label className="toDoList__text">toDoItem</label>
                        <button className="toDoList__destroy"></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default ToDoItem;
