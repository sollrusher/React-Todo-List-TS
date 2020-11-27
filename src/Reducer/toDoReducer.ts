import React from 'react';
import { Action, ActionType } from '../entities/action/Action';
import { State } from '../entities/state/State';

export const toDoReducer: React.Reducer<State, Action> = (state, action): State => {
    switch (action.type) {
        case ActionType.Add: {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        name: action.payload,
                        isDone: false,
                    },
                ],
            };
        }
        case ActionType.Change: {
            return { ...state, newToDo: action.payload };
        }
        case ActionType.Remove: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => toDo.name !== action.payload.name)] };
        }
        case ActionType.Toggle: {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList.map((toDo) =>
                        toDo !== action.payload ? toDo : { ...toDo, isDone: !toDo.isDone },
                    ),
                ],
            };
        }
        case ActionType.All: {
            return { ...state, toDoList: [...state.toDoList] };
        }
        case ActionType.Active: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => toDo.isDone === false)] };
        }
        case ActionType.Completed: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => toDo.isDone === true)] };
        }
        case ActionType.ClearAllCompleted: {
            return { ...state, toDoList: [...state.toDoList.filter((toDo) => toDo.isDone !== true)] };
        }
        default:
            throw new Error('Unexpected action');
    }
};
