import React from 'react';
import CharacterListRow from './CharacterListRow';

const CharacterList = ({data}) => {

    // console.log(data)
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Created</th>
                    <th>Height</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => <CharacterListRow key={item.name} item={item}/>)}
                </tbody>
            </table>
        );
}

export default CharacterList;