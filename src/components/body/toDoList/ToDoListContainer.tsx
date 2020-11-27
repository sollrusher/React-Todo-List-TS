import React, { useContext } from 'react';
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
        console.log('remove');
    };

    const toggleReadiness = (toDoForChange: ToDoItem) => {
        if (!changeState) {
            return;
        }

        changeState({ type: ActionType.Toggle, payload: toDoForChange });
        console.log('toggle');
    };
    const toDoItemComponent = toDoListItems?.map((toDoItem, i) => (
        <ToDoItems
            key={i}
            toDoItem={toDoItem.name}
            isDone={toDoItem.isDone}
            removeToDo={removeToDo}
            toggleReadiness={toggleReadiness}
        />
    ));

    return (
        <section className="toDoList__container">
            <ToDoList {...state} toDoItemComponent={toDoItemComponent} />
        </section>
    );
};
export default ToDoListContainer;
