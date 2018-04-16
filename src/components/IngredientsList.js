import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsList extends Component {
  render() {
    const { ingredients } = this.props;
    const ingredientElements = ingredients
      .map(ingredient => <Ingredient key={ingredient} name={ingredient} />);

    return (
      <ul className="ingredientsList">
        <h3>Ingredients :</h3>
        {ingredientElements}
      </ul>
    );
  }
}

export default IngredientsList;
