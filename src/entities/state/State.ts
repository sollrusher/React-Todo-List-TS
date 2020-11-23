import { ListToDoItems } from './ListToDoItems';

export type State = {
    toDoList: ListToDoItems;
    toggle: boolean;
    newToDo: string | undefined;
};
