import React from 'react';
import { PropsNewToDoItem } from '../../../../entities/propsInterface/PropsNewToDoItem';

const NewToDoItem: React.FC<PropsNewToDoItem> = ({ newToDo, onAddToDoChange, addToDo }: PropsNewToDoItem) => {
    return (
        <div>
            <form onBlur={(e) => addToDo(e, newToDo)}></form>
            <input
                type="text"
                className="toDoList__input"
                placeholder="What need to be done?"
                onChange={(e) => onAddToDoChange(e)}
                value={newToDo}
            />
        </div>
    );
};
export default NewToDoItem;
