import React, { Component } from 'react'
// import raichu from './raichu.png';
import './Search.css';

class Search extends Component {
  getPokemon = async (id) => {
    const $self = this;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    this.props.onSearch(pokemon);
  }
  submit = (event) => {
    event.preventDefault();
    const form = new FormData(this.refs.form);

    const pokemon = form.get('pokemon')
    this.getPokemon(pokemon)
  }
  render() {
    return (
      <form className="Search" onSubmit={this.submit} ref="form">
        <input placeholder="nombre o id" type="text" name="pokemon"/>
      </form>
    )
  }
}

export default Search;
