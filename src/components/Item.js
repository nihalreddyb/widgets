import React from 'react';

const Item = ({item, setSelectedIndex, isActive}) => {

    const onItemClick = () => {
        setSelectedIndex();
    }
    return (
        <React.Fragment>
            <div className={`title ${isActive}`} onClick={() => onItemClick()}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${isActive}`}>
                <p>
                    {item.content}
                </p>
            </div>
        </React.Fragment>
    )
}

export default Item;