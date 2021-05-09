import React from 'react';

const Item = ({index, item, setSelectedIndex, activeIndex}) => {

    const onItemClick = () => {
        setSelectedIndex();
    }

    const isActive = activeIndex === index ? 'active' : '';

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