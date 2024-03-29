import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
class App extends Component {
  render() {
      return(
      <Router>
        <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
            <Route
              path="/About"
              component={About}
            />
                  
        </PageWrapper>
    </Router>
    );
  }
}

export default App;
