import React from 'react';

const CourseListRow = ({data}) => {
    return(
        <tr>
            <th>{data.name}</th>
            <td>{data.gender}</td>
            <td>{data.created}</td>
            <td>{data.height}</td>
        </tr>
    );
}
export default CourseListRow;