export interface PropsNewToDoItem {
    newToDo: string;
    onAddToDoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
