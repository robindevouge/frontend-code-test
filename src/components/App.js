import React, { Component } from 'react';
import RecipesList from './RecipesList';
import Searchbar from './Searchbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };

    this.handleSearchbarTyping = this.handleSearchbarTyping.bind(this);
  }

  handleSearchbarTyping(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Frontend's recipes</h1>
        <Searchbar
          value={this.state.filterText}
          onInputHandler={this.handleSearchbarTyping}
        />
        <RecipesList
          filterText={this.state.filterText}
          recipes={this.props.recipes}
        />
      </div>
    );
  }
}

export default App;
