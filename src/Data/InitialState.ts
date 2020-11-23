import { State } from '../entities/state/State';

export const initialState: State = {
    toDoList: [{ name: 'first todo', isDone: false }],
    toggle: false,
    newToDo: '',
};
