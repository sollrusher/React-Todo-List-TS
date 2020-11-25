import React, { useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ActionType } from '../../../entities/action/Action';
import { ToDoItem } from '../../../entities/state/ToDoItem';
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

    const addToDo = (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => {
        if (!changeState) {
            return;
        }
        event.preventDefault();

        changeState({ type: ActionType.Add, payload: toDoName });
        changeState({ type: ActionType.Change, payload: '' });
    };

    const removeToDo = (toDoForRemove: ToDoItem) => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Remove, payload: toDoForRemove });
    };

    const toggleReadiness = (toDoForChange: ToDoItem) => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Toggle, payload: toDoForChange });
    };

    return (
        <section className="toDoList__container">
            <ToDoList
                newToDo={newToDo}
                onAddToDoChange={onAddToDoChange}
                addToDo={addToDo}
                toDoListItems={toDoListItems}
                removeToDo={removeToDo}
                toggleReadiness={toggleReadiness}
            />
        </section>
    );
};
export default ToDoListContainer;
