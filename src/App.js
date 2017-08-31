import React, {Component} from 'react';
import axios from 'axios';
import CharacterList from './CharacterList'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: []
        }
        this.sortByName = this.sortByName.bind(this);
    }

    componentDidMount() {
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

    sortByName = () => {
        const data = this.state.payload;
        const result = data.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        console.log(result);
        this.setState({
            payload: result
        })

    }


    render() {

        if (!this.state.payload) {
            return (
                <div>Loading....</div>
            )
        }
        const payload = this.state.payload;
        return (
            <div className='appContainer'>
                <CharacterList data={payload} sortByName={this.sortByName}/>
            </div>
        );
    }
}

export default App;
