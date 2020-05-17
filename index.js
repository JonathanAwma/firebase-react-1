import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import LogIn from './Login';
import * as Const from './Constants';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.userName = localStorage.getItem(Const.KEY_EMAIL);
    this.password = localStorage.getItem(Const.KEY_PASSWORD);
    this.state = {
      name: this.userName?this.userName:'React1'
    };
  }

  render() {
    if(!this.userName){
      return (
        <div>
          <LogIn/>
        </div>
      );
    }
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
