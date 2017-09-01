import React from 'react';

const FavsList = (props) => {
    return (
        <div>
            <h3>Favourites</h3>
            <div className='favourites'>
                <ul>
                {props.data.map(item => {
                    if (item.fav === true) {
                        return (
                            <li key={item.name}>{item.name}</li>
                        )
                    }
                })}
                </ul>
            </div>
        </div>
    );
};

export default FavsList;