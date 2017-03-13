import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="row">
          <div className="logo text-left col-sm-6">
            <Link to="/"><img src="/Images/Mix_C14004_Logo_Game_words.png" /></Link>
          </div>
          <div className="workbench text-right col-sm-6">
            Side Effects <br />Workbench  
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
