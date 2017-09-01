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
        this.props.openModal(this.props.item)
    };

    render() {
        const {name, created, height, mass} = this.props.item;
        let newTime = new Date(created);
        const time = `${newTime.getFullYear()}-${newTime.getMonth()}-${newTime.getDate()} @
     ${newTime.getHours()}:${newTime.getMinutes()}`;
        return (
            <tr>
                <td><span onClick={this.handleClick}>{name}</span></td>
                <td>{time}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td><span className={this.toggleStyle()} style={{color: 'red' }} onClick={this.selectHeart}></span></td>
            </tr>
        );
    }
}
export default CharacterListRow;