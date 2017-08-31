import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import CharacterList from './CharacterList'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const url = 'https://swapi.co/api/people/'
        axios.get(url)
            .then((data) => {
                this.setState(data)
                console.log(data.data.results[0])
            })
            .catch(error => {
                console.error(error)
            });
    }


  render() {
    const data = this.state.data;

    return (
        <CharacterList data={data}/>
    );
  }
}

export default App;
