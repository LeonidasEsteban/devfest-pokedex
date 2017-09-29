import React, { Component } from 'react';
import logo from './logo.svg';
import './Pokedex.css';
import Pokemon from './Pokemon';
import Search from './Search';
import pikachu from './pikachu.jpg';

class Pokedex extends Component {
  state = {
    pokemon: {
      name: 'Pikachu',
      sprites: {
        front_default: pikachu,
      }
    }
  }
  onSearch = (pokemon) => {
    this.setState({
      pokemon
    })
  }
  render() {
    return (
      <div className="Pokedex">
        <Pokemon {...this.state.pokemon} />
        <Search onSearch={this.onSearch} />
      </div>
    );
  }
}

export default Pokedex;
