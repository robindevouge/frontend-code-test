import React, { Component } from 'react';
import IngredientsList from './IngredientsList';

class Recipe extends Component {
  render() {
    return (
      <li className="recipe">
        <h2 className="recipe__title">{this.props.recipe.name}</h2>
        <p className="recipe__type"><span>Type :</span> {this.props.recipe.type}</p>
        <p className="recipe__time"><span>Cook time :</span> {this.props.recipe.cook_time}</p>
        <IngredientsList ingredients={this.props.recipe.ingredients} />
      </li>
    );
  }
}

export default Recipe;
