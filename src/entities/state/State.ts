import { ListToDoItems } from './ListTodoItems';

export type State = {
    toDoList: ListToDoItems;
    toggle: boolean;
    newToDo: string;
};
