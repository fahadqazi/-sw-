import React, { Component } from 'react';
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
            .then((response) => {
                this.setState({payload: response.data.results})
                console.log(response.data.results)
            })
            .catch(error => {
                console.error(error)
            });
    }


  render() {
        if(!this.state.payload){
            return(
                <div>Loading....</div>
            )
        }
    const payload = this.state.payload;
    return (
        <CharacterList data={payload}/>
    );
  }
}

export default App;
