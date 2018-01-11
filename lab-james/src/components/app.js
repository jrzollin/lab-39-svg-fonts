import React from 'react';

import Nav from './nav.js';

import ReactDom from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <main>
          <Nav />
          <h1>Here is a cool font!!!</h1>
          <FontAwesomeIcon icon={faCoffee} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
