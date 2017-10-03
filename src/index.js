import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDftaBzv2tEcMPjKiI8JAqFaXnwLeKcSLI';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('.container'));