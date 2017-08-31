import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import CharacterList from './CharacterList'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            payload: []
        }
    }

    componentDidMount(){
        const url = 'https://swapi.co/api/people/';
        axios.get(url)
            .then((data) => {
                this.setState({payload: data})
                console.log(data.data.results[0])
            })
            .catch(error => {
                console.error(error)
            });
    }


  render() {
    const payload = this.state.payload;
    console.log(payload);
    return (
        <CharacterList data={payload}/>
    );
  }
}

export default App;
