import React, { Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: 'wpisz coś'}
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
        value of input: {this.state.term}
      </div>
    );
  }
}


export default SearchBar;
