import React from 'react';
import { PropsToDoItem } from '../../../../entities/propsInterface/PropsToDoItem';

const ToDoItem: React.FC<PropsToDoItem> = ({ toDoItem }: PropsToDoItem) => {
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
