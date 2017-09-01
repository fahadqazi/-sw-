import React, {Component} from 'react';
import './App.css';

class CharacterListRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false
        };
        this.selectHeart = this.selectHeart.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.formattedDate = this.formattedDate.bind(this);
    }

    selectHeart = () => {
        this.setState({
            selected: !this.state.selected
        });
        this.props.addToFavs(this.props.item);
    };

    toggleStyle = () => {
        if (!this.state.selected){
            return 'glyphicon glyphicon-heart-empty heart'
        }
        return 'glyphicon glyphicon-heart heart'
    };

    handleClick = () => {
        console.log('handling')
        this.props.toggleModal(this.props.item)
    };

    formattedDate = (rawDate) => {
        let newTime = new Date(rawDate);
        return `${newTime.getDate()}-${newTime.getMonth()}-${newTime.getFullYear()} @
     ${newTime.getHours()}:${newTime.getMinutes()}`;
    }

    render() {
        const {name, created, height, mass} = this.props.item;
        const date = this.formattedDate(created);
        return (
            <tr>
                <td><a><span onClick={this.handleClick}>{name}</span></a></td>
                <td>{date}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td><span className={this.toggleStyle()} style={{color: 'red' }} onClick={this.selectHeart}></span></td>
            </tr>
        );
    }
}
export default CharacterListRow;