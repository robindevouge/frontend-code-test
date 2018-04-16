import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipesList extends Component {
  render() {
    const items = [];
    this.props.recipes.forEach((element) => {
      items.push(<Recipe recipe={element} />);
    });

    return (
      <ul className="recipesList">{items}</ul>
    );
  }
}

export default RecipesList;
