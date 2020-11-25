import { ListToDoItems } from '../state/ListToDoItems';
import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoList {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToDo: (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => void;
    toDoListItems: ListToDoItems | undefined;
    removeToDo: (toDoFor: ToDoItem) => void;
    toggleReadiness: (toDoForChange: ToDoItem) => void;
}
