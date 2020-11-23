import React from 'react';
import { PropsNewToDoItem } from '../../../../entities/propsInterface/PropsNewToDoItem';

const NewToDoItem: React.FC<PropsNewToDoItem> = ({ newToDo, onAddToDoChange }: PropsNewToDoItem) => {
    return (
        <div>
            <input
                type="text"
                className="toDoList__input"
                placeholder="What need to be done?"
                onChange={(e) => onAddToDoChange(e, newToDo)}
                value={newToDo}
            />
        </div>
    );
};
export default NewToDoItem;
