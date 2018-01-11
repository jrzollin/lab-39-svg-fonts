import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app.js';

import './style/main.scss';

class Main extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
