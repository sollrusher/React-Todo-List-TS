import React, { memo, useContext } from 'react';
import { DataContext } from '../../Data/DataContext';
import { ActionType } from '../../entities/action/Action';
import Footer from './Footer';

const ToDoListContainer: React.FC = () => {
    const { state, changeState } = useContext(DataContext);
    const allToDoCounter = state?.toDoList.length;
    const completedCounter = state?.toDoList.filter((a) => a.isDone === true);

    const onAll = () => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.All });
    };

    const onActive = () => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Active });
    };

    const onCompleted = () => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.Completed });
    };

    const onClearAllCompleted = () => {
        if (!changeState) {
            return;
        }
        changeState({ type: ActionType.ClearAllCompleted });
    };

    return (
        <section className="toDoList__container">
            <Footer
                allToDoCounter={allToDoCounter}
                onAll={onAll}
                onActive={onActive}
                onCompleted={onCompleted}
                onClearAllCompleted={onClearAllCompleted}
                completedCounter={completedCounter?.length}
            />
        </section>
    );
};
export default memo(ToDoListContainer);
