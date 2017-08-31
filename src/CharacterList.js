import React from 'react';
import CharacterListRow from './CharacterListRow';

const CharacterList = ({data, sortByName}) => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Favourite</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => <CharacterListRow key={item.name} item={item}/>)}
                </tbody>
            </table>
        );
}

export default CharacterList;