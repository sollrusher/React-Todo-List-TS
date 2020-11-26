import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoItem {
    toDoItem: string | undefined;
    isDone: boolean;
    removeToDo: (toDoForRemove: ToDoItem) => void;
    toggleReadiness: (toDoForChange: ToDoItem) => void;
}
