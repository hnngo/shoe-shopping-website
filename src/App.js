import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/auth';
import './styles/App.css';
import './styles/MediaQueries.css';
import NavBar from './components/NavBar';
import LandingPage from './components/landing_page/LandingPage';
import ShoesPage from './components/ShoesPage';
import AccessoriesPage from './components/AccessoriesPage';
import Footer from './components/Footer';
import rootReducer from './reducers';
import CartItems from './components/cart_page/CartItems';
import OrderPage from './components/OrderPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  constructor(props) {
    super(props);

    // Initial Firebase
    const config = {
      apiKey: "AIzaSyBfaCTrLiHxQ6bv2MS6yXRvq5MxlQafwAs",
      authDomain: "shoes-shopping-website.firebaseapp.com",
      databaseURL: "https://shoes-shopping-website.firebaseio.com",
      projectId: "shoes-shopping-website",
      storageBucket: "shoes-shopping-website.appspot.com",
      messagingSenderId: "1007532335331"
    };

    firebase.initializeApp(config);

    // Sign out of the last sign in
    firebase.auth().signOut();
  }

  render() {
    // Initial store for redux, which no initial state and apply middleware Redux Thunk
    let store;

    //-----DEV-----//
    if (false) {
      const composeEnhancers =
        typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          }) : compose;

      const enhancer = composeEnhancers(
        applyMiddleware(ReduxThunk),
        // other store enhancers if any
      );
      //-----DEV-----//

      store = createStore(rootReducer, {}, enhancer);
    }

    if (true) {
      store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
    }

    return (
      <HashRouter>
        <Provider store={store}>
          <NavBar />
          <div className="landing-picture-container">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/shoes" component={ShoesPage} />
              <Route path="/accessories" component={AccessoriesPage} />
              <Route path="/cart" component={CartItems} />
              <Route path="/orders" component={OrderPage} />
              {/* <Route path="/search" component={SearchPage} /> */}
              {/* Redirect to home when entering wrong paths */}
              <Route component={SearchPage}/>
            </Switch>
          </div>
          <Footer />
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
