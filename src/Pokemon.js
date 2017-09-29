import React, { Component } from 'react'
import raichu from './raichu.png';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    return (
        <div className="Pokemon">
          <div className="Pokemon-window">
            <img src={this.props.sprites.front_default} alt=""/>
          </div>
          <p className="Pokemon-name">{this.props.name}</p>
        </div>
    )
  }
}

export default Pokemon;
