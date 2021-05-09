import React, { useState } from 'react';
import Translate from './components/Translate';
import Items from './components/Items'
import Search from './components/Search';
import DropDown from './components/DropDown';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        id: 1,
        title: 'What is React',
        content: 'React is a front end JS Framework'
    },
    {
        id: 2,
        title: 'Why Use React?',
        content: 'React is my Favorite Front End Libraty'
    },
    {
        id: 3,
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
];

const colors = [
    {
        label:'Red',
        value: 'red'
    },
    {
        label:'Green',
        value: 'green'
    },
    {
        label:'Blue',
        value: 'blue'
    }
];

const App = () => {

    const [color, setColor] = useState(colors[0]);
    const label = "Select Color"

    return (
        <div>
            <Header></Header>
            <div>
                <Route path="/">
                    <Items items={items}></Items>
                </Route>
                <Route path="/list">
                    <Search></Search>
                </Route>
                <Route path="/dropdown">
                    <DropDown label={label} selectedItem={color} setSelection={setColor} list={colors}></DropDown>
                </Route>
                <Route path="/translate">
                    <Translate></Translate>
                </Route>
            </div>
        </div>
    )
}

export default App;