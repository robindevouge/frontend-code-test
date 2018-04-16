import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsList extends Component {
  render() {
    const items = [];
    this.props.ingredients.forEach((element) => {
      items.push(<Ingredient name={element} />);
    });

    return (
      <ul className="ingredientsList">
        <h3>Ingredients :</h3>
        {items}
      </ul>
    );
  }
}

export default IngredientsList;
