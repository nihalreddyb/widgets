import React, { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const languages = [
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value: 'ar'
    },
    {
        label:'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const label = "Select Language"

    const [language, setLanguage] = useState(languages[0]);
    const [translateText, setTranslateText] = useState('');

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text to Translate</label>
                    <input type="text" value={translateText} onChange={(event) => setTranslateText(event.target.value)}></input>
                </div>
            </div>
            <DropDown label={label} selectedItem={language} setSelection={setLanguage} list={languages}></DropDown>
            <Convert language={language.value} term={translateText}></Convert>
        </div>
    )
}

export default Translate