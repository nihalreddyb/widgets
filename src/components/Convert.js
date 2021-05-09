import React, { useEffect, useState } from 'react';
import googleTranslate from '../apis/googleTranslate';

const Convert = ({language, term}) => {

    const [translatedText, setTranslatedText] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(language);

    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        },500);

        return () => {
            clearTimeout(timerId);
        }

    }, [term]);

    useEffect(() => {
        const translate = async () => {
            const {data} = await googleTranslate.post('', {}, {
                params: {
                    q: debouncedTerm,
                    target: language
                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        }
        translate();
    }, [language, debouncedTerm])

    return (
        <div className="ui segment">
            <h1 className="ui header">
                {translatedText}
            </h1>
        </div>
    )
}

export default Convert;