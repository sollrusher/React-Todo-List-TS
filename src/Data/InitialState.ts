import { State } from '../entities/state/State';

export const initialState: State = {
    toDoList: [{ id: 'it is first', name: 'first todo', isDone: false }],
    toggle: false,
    newToDo: '',
};
