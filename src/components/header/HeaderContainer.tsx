import React, { useContext } from 'react';
import { DataContext } from '../../Data/DataContext';
import { ActionType } from '../../entities/action/Action';
import Header from './Header';

const ToDoListContainer: React.FC = () => {
    const { state, changeState } = useContext(DataContext);

    const onAddToDoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Change, payload: event.target.value });
    };

    const addToDo = (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => {
        if (!changeState) {
            return;
        }
        event.preventDefault();
        changeState({ type: ActionType.Add, payload: toDoName });
        changeState({ type: ActionType.Change, payload: '' });
    };

    return (
        <section className="toDoList__container">
            <Header {...state} newToDo={state?.newToDo} onAddToDoChange={onAddToDoChange} addToDo={addToDo} />
        </section>
    );
};
export default ToDoListContainer;
