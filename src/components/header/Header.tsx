import React from 'react';

const Header = (): React.FunctionComponent => {
    // const newPostElement: React.RefObject<string | null> = React.createRef();

    // const onPostChange = () => {
    //     const text = newPostElement.current.value;
    //     //props.updateNewPostText(text);
    //     //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
    //     const action = updateNewPostTextActionCreator(text);
    //     props.dispatch(action);
    // };

    return (
        <header>
            <h1 className="header__title">todos</h1>
            <input
                type="text"
                className="header__input"
                placeholder="What need to be done?"
                // onChange={onPostChange}
                // ref={newPostElement}
                // value={props.newPostText}
            />
        </header>
    );
};

export default Header;
