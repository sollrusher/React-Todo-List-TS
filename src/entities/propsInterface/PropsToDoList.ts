export interface PropsToDoList {
    newToDo: string | undefined;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addToDo: (event: React.FormEvent<HTMLFormElement>, toDoName: string | undefined) => void;
    toDoItemComponent: JSX.Element[] | undefined;
}
