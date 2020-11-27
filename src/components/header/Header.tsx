import React from 'react';
import { PropsNewToDoItem } from '../../entities/propsInterface/PropsNewToDoItem';

const Header: React.FunctionComponent<PropsNewToDoItem> = ({ newToDo, onAddToDoChange, addToDo }: PropsNewToDoItem) => {
    return (
        <header>
            <h1 className="header__title">todos</h1>
            <form onSubmit={(e) => addToDo(e, newToDo)}>
                <input
                    type="text"
                    className="toDoList__input"
                    placeholder="What need to be done?"
                    onChange={(e) => onAddToDoChange(e)}
                    value={newToDo}
                />
            </form>
        </header>
    );
};
export default Header;
