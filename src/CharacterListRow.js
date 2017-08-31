import React from 'react';

const CharacterListRow = (props) => {
    const {name, gender, created, height} = props.item;
    let newTime = new Date(created);
    const time = `${newTime.getFullYear()}-${newTime.getMonth()}-${newTime.getDate()} @
     ${newTime.getHours()}:${newTime.getMinutes()}`;
    return(
        <tr>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{time}</td>
            <td>{height}</td>
            <td><span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span></td>
        </tr>
    );
}
export default CharacterListRow;