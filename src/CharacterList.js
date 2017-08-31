import React from 'react';
import CharacterListRow from './CharacterListRow';

const CharacterList = ({data, sortByName}) => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th><button className='btn btn-primary' onClick={sortByName}>Name</button></th>
                    <th>Gender</th>
                    <th>Created</th>
                    <th><button className='btn btn-primary'>Height</button></th>
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