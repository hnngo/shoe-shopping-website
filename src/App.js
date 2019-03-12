import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/MediaQueries.css';
import NavBar from './components/NavBar';
import LandingPage from './components/landing_page/LandingPage';
import ShoesPage from './components/shoes_page/ShoesPage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="landing-picture-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/shoes" component={ShoesPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
