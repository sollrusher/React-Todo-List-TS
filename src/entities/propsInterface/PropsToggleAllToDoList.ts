import { ToDoItem } from '../state/ToDoItem';

export interface PropsToggleAllToDoList {
    toggleReadiness: (toDoForChange: ToDoItem) => void;
}
