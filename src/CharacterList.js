import React, {Component} from 'react';

class CharacterList extends Component{
    render(){
        console.log('in characterList', this.props.data);
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
                {/*{courses.map(course =>*/}
                    {/*<CourseListRow key={course.id} course={course}/>*/}
                {/*)}*/}
                </tbody>
            </table>
        );
    };
}

export default CharacterList;