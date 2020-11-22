import { Dispatch } from 'react';
import { State } from '../state/State';
import { ToDoItem } from '../state/ToDoItem';

export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle',
}

type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change;
    payload: string;
};

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove;
    payload: ToDoItem;
};

export type Action = ActionStringPayload | ActionObjectPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>;
};
