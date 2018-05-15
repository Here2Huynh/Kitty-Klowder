import React from 'react';
import './Card.css'

const Card = ({id, name, description}) => {
    return (
        <div className='cardColor dib br3 pa3 ma2 grow tc'>
            <img alt='Kitty' src={`https://robohash.org/set_set4/kitty${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;