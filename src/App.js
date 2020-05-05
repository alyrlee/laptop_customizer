import React, { Component } from 'react';
import FEATURES from './index';
import MainForm from './Main_Form';
import MainSummary from './Main_Summary.js';
import './App.css';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        features: FEATURES,
        selected: { },
    };
    this.handleClick = this.handleClick.bind(this)
    this.total = this.total.bind(this)
  }
  
  
  handleClick( name, cost, title) {
    const selected = Object.assign({}, this.state.selected);
    selected[title] = [name, cost]

    this.setState({
        selected
    });

    this.total()
}

total = () => {
  let sum = 0
  Object.keys(this.state.selected).forEach(key => {
      sum += this.state.selected[key][1]
  })
  return sum;
}

    render () {
      return (
          <div className="App">
              <header role="banner">
              <h1>ELF Computing | Laptops</h1>
              <h2>Customize your laptop</h2>
              </header>    
            <div className="main__form">
              <main role="main">
                  <MainForm
                      features={this.state.features}
                      selected={this.state.selected}
                      onClick={this.handleClick} 
                  />
              <div className="main__summary">  
                  <MainSummary 
                      selected={this.state.selected}
                      total={this.total()}
                  />
                  </div>  
              </main>
          </div>
          </div>
      );
  }

}

export default App;
