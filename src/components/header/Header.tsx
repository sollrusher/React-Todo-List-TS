import React, { memo } from 'react';
import { PropsNewToDoItem } from '../../entities/propsInterface/PropsNewToDoItem';

const Header: React.FunctionComponent<PropsNewToDoItem> = ({ newToDo, onAddToDoChange, addToDo }: PropsNewToDoItem) => {
    return (
        <header>
            <h1 className="header__title">todos</h1>
            <form className="header__newTodo" onSubmit={(e) => addToDo(e, newToDo)}>
                <input
                    type="text"
                    className="header__input header__input-edit"
                    placeholder="What need to be done?"
                    onChange={(e) => onAddToDoChange(e)}
                    value={newToDo}
                />
            </form>
        </header>
    );
};
export default memo(Header);
