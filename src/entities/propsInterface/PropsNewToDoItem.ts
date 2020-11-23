export interface PropsNewToDoItem {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>, toDoName: string | undefined) => void;
}
