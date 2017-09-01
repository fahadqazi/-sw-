import React from 'react';
import CharacterListRow from './CharacterListRow';

const CharacterList = ({data, addToFavs, openModal}) => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Height</th>
                    <th>Mass</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item =>
                    <CharacterListRow key={item.name} item={item} addToFavs={addToFavs} openModal={openModal}/>)}
                </tbody>
            </table>
        );
}

export default CharacterList;