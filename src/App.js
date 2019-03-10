import React, { Component } from 'react';
import './styles/App.css';
import './styles/MediaQueries.css';
import NavBar from './components/NavBar';
import LandingPage from './components/landing_page/LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
