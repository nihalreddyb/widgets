import React, {useState} from 'react';
import Item from './Item'

const Items  = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null); 

    const onItemClick = (index) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index) => {

        return <Item key={item.id} item={item} index={index} setSelectedIndex={() => onItemClick(index)} activeIndex={activeIndex}></Item>
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Items;