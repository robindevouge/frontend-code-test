import React, { Component } from 'react';
import RecipesList from './RecipesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Frontend's recipes</h1>
        <RecipesList recipes={this.props.recipes} />
      </div>
    );
  }
}

export default App;
