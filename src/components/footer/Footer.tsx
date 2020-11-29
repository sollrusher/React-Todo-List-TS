import React, { memo } from 'react';
import { PropsFooter } from '../../entities/propsInterface/PropsFooter';

const Footer: React.FC<PropsFooter> = ({
    allToDoCounter,
    onAll,
    onActive,
    onCompleted,
    onClearAllCompleted,
    completedCounter,
}: PropsFooter) => {
    if (allToDoCounter === 0) {
        return null;
    }
    return (
        <section className="footer hidden">
            <span className="footer__todo-count">
                <strong>{allToDoCounter} </strong>
                item left
            </span>
            <ul className="footer__filters">
                <li className="footer__text">
                    <a onClick={onAll}>all</a>
                </li>
                <li className="footer__text">
                    <a onClick={onActive}>active</a>
                </li>
                <li className="footer__text">
                    <a onClick={onCompleted}>completed</a>
                </li>
            </ul>
            <button className="footer__clear-completed" onClick={onClearAllCompleted}>
                Clear completed[<span className="footer__completed-count">{completedCounter}</span>]
            </button>
        </section>
    );
};
export default memo(Footer);
