import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipesList extends Component {
  render() {
    const { recipes } = this.props;
    const recipeCards = recipes
      .map(recipe => (
        <Recipe
          key={recipe.name}
          recipe={recipe}
        />
      ));

    return (
      <ul className="recipesList">{recipeCards}</ul>
    );
  }
}

export default RecipesList;
