import * as React from 'react';

const Footer = (): JSX.Element => {
    return (
        <section className="toDoList">
            <input type="checkbox" className="toDoList__toggle-all" id="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="toDoList__list">
                <li className="toDoList__item">
                    <div className="toDoList__view">
                        <input type="checkbox" className="toDoList__toggle" />
                        <label className="toDoList__text"></label>
                        <button className="toDoList__destroy"></button>
                    </div>
                </li>
            </ul>
        </section>
    );
};
export default Footer;
