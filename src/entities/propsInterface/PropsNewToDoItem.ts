export interface PropsNewToDoItem {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToDo: (event: React.FocusEvent<HTMLInputElement>, toDoName: string | undefined) => void;
}
