import React from 'react';
import { PropsNewToDoItem } from '../../../../entities/propsInterface/PropsNewToDoItem';

const NewToDoItem: React.FC<PropsNewToDoItem> = ({ newToDo, onAddToDoChange, addToDo }: PropsNewToDoItem) => {
    return (
        <div>
            <form onSubmit={(e) => addToDo(e, newToDo)}>
                <input
                    type="text"
                    className="toDoList__input"
                    placeholder="What need to be done?"
                    onChange={(e) => onAddToDoChange(e)}
                    value={newToDo}
                />
            </form>
        </div>
    );
};
export default NewToDoItem;
