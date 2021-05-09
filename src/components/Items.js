import React, {useState} from 'react';
import Item from './Item'

const Items  = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null); 

    const onItemClick = (index) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index) => {

        const isActive = activeIndex === index ? 'active' : '';

        return <Item key={item.id} item={item} setSelectedIndex={() => onItemClick(index)} active={isActive}></Item>
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h4>{activeIndex}</h4>
        </div>
    )
}

export default Items;