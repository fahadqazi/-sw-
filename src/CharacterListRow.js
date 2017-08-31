import React from 'react';

const CharacterListRow = (props) => {
    const {name, gender, created, height} = props.item;
    return(
        <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{created}</td>
            <td>{height}</td>
        </tr>
    );
}
export default CharacterListRow;