import React, { useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ActionType } from '../../../entities/action/Action';
import ToDoList from './ToDoList';

const ToDoListContainer: React.FC = () => {
    const { state, changeState } = useContext(DataContext);
    const newToDo = state?.newToDo;

    const toDoListItems = state?.toDoList;

    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.Change, payload: event.target.value });
    };

    const addToDo = (event: React.FocusEvent<HTMLInputElement>, toDoName: string | undefined) => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Add, payload: toDoName });
        changeState({ type: ActionType.Change, payload: '' });
    };

    return (
        <section className="toDoList__container">
            <ToDoList
                newToDo={newToDo}
                onAddToDoChange={onAddToDoChange}
                addToDo={addToDo}
                toDoListItems={toDoListItems}
            />
        </section>
    );
};
export default ToDoListContainer;
