import { ListToDoItems } from '../state/ListToDoItems';

export interface PropsToDoList {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToDo: (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => void;
    toDoListItems: ListToDoItems | undefined;
}
