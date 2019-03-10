import React, { Component } from 'react';
import './styles/App.css';
import './styles/MediaQueries.css';
import NavBar from './components/NavBar';
import LandingPage from './components/landing_page/LandingPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
