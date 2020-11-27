import React from 'react';
import { PropsFooter } from '../../entities/propsInterface/PropsFooter';

const Footer: React.FC<PropsFooter> = ({ onAll, onActive, onCompleted, onClearAllCompleted }: PropsFooter) => {
    return (
        <section className="footer">
            <span className="footer__todo-count">
                <strong></strong>
            </span>
            <ul className="footer__filters">
                <li className="footer__text" onClick={onAll}>
                    all
                </li>
                <li className="footer__text" onClick={onActive}>
                    active
                </li>
                <li className="footer__text" onClick={onCompleted}>
                    completed
                </li>
            </ul>
            <button className="footer__clear-completed" onClick={onClearAllCompleted}>
                Clear completed[<span className="footer__completed-count"></span>]
            </button>
        </section>
    );
};
export default Footer;
