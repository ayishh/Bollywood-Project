import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
    {
        name: 'Raj',
        description: 'The charming, free-spirited character from DDLJ.',
        image: process.env.PUBLIC_URL + '/raj.jpg',
        tags: ['hero', 'romance']
    },
    {
        name: 'Simran',
        description: 'A traditional yet strong character from DDLJ.',
        image: process.env.PUBLIC_URL + '/simran.jpeg',
        tags: ['heroine', 'romance']
    },
    {
        name: 'Gabbar',
        description: 'The infamous villain from Sholay.',
        image: process.env.PUBLIC_URL + '/gabbar.jpg',
        tags: ['villain', 'action', 'classic']
    }
];

function CharacterList({ filter }) {
    const filteredCharacters = filter
        ? characters.filter((char) => char.tags.includes(filter))
        : characters;

    return (
        <div className="character-list">
            {filteredCharacters.map((char, index) => (
                <CharacterCard
                    key={index}
                    name={char.name}
                    description={char.description}
                    image={char.image}
                />
            ))}
        </div>
    );
}

export default CharacterList;
