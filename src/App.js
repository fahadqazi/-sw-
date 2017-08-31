import React, {Component} from 'react';
import axios from 'axios';
import CharacterList from './CharacterList'
import FavsList from './FavsList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: [],
            favs: []
        }
        this.sortByName = this.sortByName.bind(this);
        this.addToFavs = this.addToFavs.bind(this);
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
        this.setState({
            payload: result
        })
    };

    addToFavs = (character) => {
        const favList = this.state.payload.map((item) => {
            if (item.name === character.name){
                if (character.fav === true){
                    return Object.assign({}, item, {
                       fav: false
                    });
                }
                return Object.assign({}, item, {
                    fav: true
                });
            } else {
                return item;
            }
        });
        this.setState({
            payload: favList
        })
    };

    render() {
        console.log(this.state.payload);
        if (!this.state.payload) {
            return (
                <div>Loading....</div>
            )
        }
        const payload = this.state.payload;
        return (
            <div className='appContainer'>
                <div>
                    <CharacterList data={payload} addToFavs={this.addToFavs}/>
                </div>
                <button className="btn btn-primary" onClick={this.sortByName}>Sort By Name</button>

               <FavsList data={this.state.payload}/>
            </div>
        );
    }
}

export default App;
