import React, {useState, useEffect} from 'react';
import wikipedia from '../apis/wikipedia';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('ferrari');
    const [wikiResults, setWikiResults] = useState([]);

    useEffect(() => {
        const searchWiki = async () => {
            const searchResults = await wikipedia.get('', {
                params: {
                    srsearch: searchTerm
                }
            })
            setWikiResults(searchResults.data.query.search);
        };

        const timeout = setTimeout(() => {
            if(searchTerm.length > 0) {
                searchWiki();
            } else {
                setWikiResults([]);
            }
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
        
    }, [searchTerm])

    const onSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    

    const renderedList = wikiResults.map(({pageid, title, snippet}) => {
        return (
            <React.Fragment key={pageid}>
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                        <div className="description" dangerouslySetInnerHTML={{__html: snippet}}>
                            {/* {snippet} */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <input type="text" placeholder="Search..." value={searchTerm} onChange={onSearchChange}></input>
                    </div>
                </div>
            </div>
                {renderedList}
        </div>
    )
}

export default Search