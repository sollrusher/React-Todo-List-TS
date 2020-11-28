import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoItem {
    id: string | undefined;
    toDoItem: string | undefined;
    isDone: boolean;
    removeToDo: (toDoForRemove: ToDoItem) => void;
    toggleReadiness: (toDoForChange: ToDoItem) => void;
}
