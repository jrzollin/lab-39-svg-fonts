import React from 'react';

import '../style/components/nav.scss';

class Nav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <ul>
          <li>
          Nav 1
            <ul>
              <li>SubNav 1</li>
              <li>SubNav 2</li>
              <li>SubNav 3</li>
            </ul>
          </li>
          <li>
          Nav 2
            <ul>
              <li>SubNav 1</li>
              <li>SubNav 2</li>
              <li>SubNav 3</li>
            </ul>
          </li>
          <li>
          Nav 3
            <ul>
              <li>SubNav 1</li>
              <li>SubNav 2</li>
              <li>SubNav 3</li>
            </ul>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Nav;
