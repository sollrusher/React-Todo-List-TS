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
}

type ActionStringPayload = {
    type: ActionType.Add | ActionType.Change;
    payload: string | undefined;
};

type ActionObjectPayload = {
    type: ActionType.Toggle | ActionType.Remove;
    payload: ToDoItem;
};

type ActionBooleanPayload = {
    type: ActionType.Active | ActionType.Completed | ActionType.All;
};

export type Action = ActionStringPayload | ActionObjectPayload | ActionBooleanPayload;

export type ContextState = {
    state: State;
    changeState: Dispatch<Action>;
};
