import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './styles/App.css';
import PopupNavBar from './components/PopupNavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <PopupNavBar /> */}
        <div>
        </div>
      </div>
    );
  }
}

export default App;
