import { ToDoItem } from '../state/ToDoItem';

export interface PropsToDoList {
    newToDo: string;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    toDoItem: ToDoItem | undefined;
}
