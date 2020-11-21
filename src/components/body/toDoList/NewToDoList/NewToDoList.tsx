import React, { useState } from 'react';

interface Props {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewToDoList = ({ newToDo, onAddToDoChange }: Props): JSX.Element => {
    const [toDo, setToDo] = useState<string | undefined>(newToDo);

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
export default NewToDoList;
