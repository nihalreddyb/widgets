import React, { useState, useEffect, useRef } from 'react';

const DropDown = ({label, list, selectedItem, setSelection}) => {

    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)) {
                return
            }
            setOpen(false)
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});
        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    }, []);

    const renderedOptions = list.map(color => {
        return (
            <div 
                className="item" 
                key={color.value} 
                onClick={() => setSelection(color)}>
                    {color.label}
            </div>
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedItem.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;