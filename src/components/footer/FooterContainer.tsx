import React, { useContext } from 'react';
import { DataContext } from '../../Data/DataContext';
import { ActionType } from '../../entities/action/Action';
import Footer from './Footer';

const ToDoListContainer: React.FC = () => {
    const { changeState } = useContext(DataContext);

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

    return (
        <section className="toDoList__container">
            <Footer onAll={onAll} onActive={onActive} onCompleted={onCompleted} />
        </section>
    );
};
export default ToDoListContainer;
