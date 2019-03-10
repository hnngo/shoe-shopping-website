import React, { Component } from 'react';
import './styles/App.css';
import './styles/MediaQueries.css';
import NavBar from './components/NavBar';
import LandingPicture from './components/landing_page/LandingPicture';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPicture />
      </div>
    );
  }
}

export default App;
