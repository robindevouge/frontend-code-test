import React, { Component } from 'react';
import IngredientsList from './IngredientsList';
import RecipeCheckbox from './RecipeCheckbox';

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <li className="recipe">
        <RecipeCheckbox
          name={this.props.recipe.name.toLowerCase()}
          onCheckHandler={this.handleCheck}
        />
        <h2 className="recipe__title">{this.props.recipe.name}</h2>
        <p className="recipe__type"><span>Type :</span> {this.props.recipe.type}</p>
        <p className="recipe__time"><span>Cook time :</span> {this.props.recipe.cook_time}</p>
        <IngredientsList ingredients={this.props.recipe.ingredients} />
      </li>
    );
  }
}

export default Recipe;
