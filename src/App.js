import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cats from './Components/Cats';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="container-fluid">
              <Header/>
                <div className="container">
                  <Cats/>
                </div>
              <Footer/>
          </div>

      );
  }
}

export default App;
