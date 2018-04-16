import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipesList extends Component {
  render() {
    const { filterText, recipes } = this.props;
    const recipeCards = recipes
      .filter(recipe => !filterText.length ||
        recipe.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1)
      .map(recipe => (<Recipe key={recipe.name} recipe={recipe} />));

    return (
      <ul className="recipesList">{recipeCards}</ul>
    );
  }
}

export default RecipesList;
