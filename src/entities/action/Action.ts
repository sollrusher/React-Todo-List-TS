import { Dispatch } from 'react';
import { State } from '../state/State';
import { ToDoItem } from '../state/ToDoItem';

export enum ActionType {
    Add = 'Add',
    Change = 'Change',
    Remove = 'Remove',
    Toggle = 'Toggle',
    All = 'All',
    Active = 'Active',
    Completed = 'Completed',
    ClearAllCompleted = 'ClearAllCompleted',
    ToggleAll = 'ToggleAllReadiness',
}

type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change;
    payload: string | undefined;
};

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove;
    payload: ToDoItem;
};

type ActionVoidPayload = {
    type:
        | ActionType.Active
        | ActionType.Completed
        | ActionType.All
        | ActionType.ClearAllCompleted
        | ActionType.ToggleAll;
};

export type Action = ActionStringPayload | ActionObjectPayload | ActionVoidPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>;
};
