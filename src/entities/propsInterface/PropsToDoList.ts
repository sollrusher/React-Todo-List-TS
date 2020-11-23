import { ListToDoItems } from '../state/ListToDoItems';

export interface PropsToDoList {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>, toDoName: string | undefined) => void;
    toDoListItems: ListToDoItems | undefined;
}
