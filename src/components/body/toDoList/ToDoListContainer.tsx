import React, { memo, useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ActionType } from '../../../entities/action/Action';
import { ToDoItem } from '../../../entities/state/ToDoItem';
import ToDoList from './ToDoList';
import ToDoItems from './toDoItems/ToDoItems';

const ToDoListContainer: React.FC = () => {
    const { state, changeState } = useContext(DataContext);

    const toDoListItems = state?.toDoList;

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

    const toggleAllReadiness = () => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.ToggleAll });
    };

    const toDoItemComponent = toDoListItems?.map((toDoItem, i) => (
        <ToDoItems
            key={i}
            id={toDoItem.id}
            toDoItem={toDoItem.name}
            isDone={toDoItem.isDone}
            removeToDo={removeToDo}
            toggleReadiness={toggleReadiness}
        />
    ));

    return (
        <section className="toDoList__container">
            <ToDoList {...state} toDoItemComponent={toDoItemComponent} toggleAllReadiness={toggleAllReadiness} />
        </section>
    );
};
export default memo(ToDoListContainer);
