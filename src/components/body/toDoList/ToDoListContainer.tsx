import React, { useContext } from 'react';
import { DataContext } from '../../../Data/DataContext';
import { ActionType } from '../../../entities/action/Action';
import { ToDoItem } from '../../../entities/state/ToDoItem';
import ToDoList from './ToDoList';
import ToDoItems from './toDoItems/ToDoItems';

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
            <ToDoList
                newToDo={newToDo}
                onAddToDoChange={onAddToDoChange}
                addToDo={addToDo}
                toDoItemComponent={toDoItemComponent}
            />
        </section>
    );
};
export default ToDoListContainer;
