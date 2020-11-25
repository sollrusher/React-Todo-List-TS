import { ListToDoItems } from '../state/ListToDoItems';

export interface PropsToDoList {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    toDoListItems: ListToDoItems | undefined;
}
