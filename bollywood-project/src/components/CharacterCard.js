import React from 'react';

function CharacterCard({ name, description, image }) {
    return (
        <div className="character-card">
            <img src={image} alt={name} className="character-image" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default CharacterCard;
