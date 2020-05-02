import React, { Component } from 'react';
import './App.css';
import MainSummary from './MainSummary'
import MainForm from './MainForm'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        features: features,
        selected: { },
    };
    this.handleClick = this.handleClick.bind(this)
    this.total = this.total.bind(this)
}


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  //event handler here....

  render() {
    return (
      <div className="App">
      <header role="banner">
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
      </header>      
  <main role="main">
    <MainForm
      features={this.state.features}
  />
  <MainSummary
      selected={this.state.selected}
      total={this.total()}
  />
</main>
        
        </div>
        );
      }
    }


  export default App;

  