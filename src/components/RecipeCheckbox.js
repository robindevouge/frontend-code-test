import React, { Component } from 'react';


class RecipeCheckbox extends Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(ev) {
    this.props.onCheckHandler(ev.target.checked);
  }

  render() {
    return (
      <input
        type="checkbox"
        className={`checkbox checkbox--${this.props.name.replace(/\s/g, '')}`}
        onChange={this.onCheck}
      />
    );
  }
}

export default RecipeCheckbox;
