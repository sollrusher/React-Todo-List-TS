import React, { useState } from 'react';
import { PropsNewToDoItem } from '../../../../entities/propsInterface/PropsNewToDoItem';

const NewToDoItem: React.FC<PropsNewToDoItem> = ({ newToDo, onAddToDoChange }: PropsNewToDoItem) => {
    const [toDo, setToDo] = useState<string>(newToDo);

    // const onToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setToDo(event.target.value);
    // };

    return (
        <div>
            <input
                type="text"
                className="toDoList__input"
                placeholder="What need to be done?"
                onChange={onAddToDoChange}
                value={toDo}
            />
        </div>
    );
};
export default NewToDoItem;
