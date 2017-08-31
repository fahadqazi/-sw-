import React, {Component} from 'react';
import CourseListRow from './CourseListRow';

const CharacterList = ({data}) =>{
        console.log('in character list', data);
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
                {/*{data.map(item =>*/}
                    {/*<CourseListRow key={item.name} item={item}/>*/}
                {/*)}*/}
                </tbody>
            </table>
        );
}

export default CharacterList;