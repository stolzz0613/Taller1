import React, {useEffect, useState} from 'react';
import Character from './Character';
import '../styles/List.css';

export default function CharacterList() {
    const [characters, setcharacters] = useState([]);
    const [page, setpage] = useState(1);
    const url = 'https://rickandmortyapi.com/api/character/?page=' + page;

    useEffect(() => {
        getCharacters();
    }, [page]);

    async function getCharacters() {
        setcharacters([]);
        await fetch(url)
            .then((response) => response.json())
            .then(data => setcharacters(data.results));
    }

    return (
        <>
            <button onClick={() => setpage(page - 1)}>ANTERIOR</button>
            <button onClick={() => setpage(page + 1)}>SIGUIENTE</button>
            <div className='container-list'>
                {
                    characters.map(e => {
                        return <Character key={e.name} charInfo={e} />
                    })
                }
            </div>
        </>
    )
}

