import React from 'react';
import Card from './Card';


const CardList = ( {Kitties} ) => {
    return (
        <div>
            {
                Kitties.map((kitty,i) => {
                    return (
                        <Card
                            key={i}
                            id={kitty.id}
                            name={kitty.name}
                            description={kitty.description}   
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;

