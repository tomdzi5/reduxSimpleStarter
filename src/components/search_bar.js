import React, { Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: 'wpisz coś'}
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e)} />
        value of input: {this.state.term}
      </div>
    );
  }
}


export default SearchBar;
