import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

//use class to define the component 
class App extends Component {
  //setting up state object for App 
  //default values for state
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  //update feature in the app when selected takes in props feature and newValue. When feature is selected is is passed in the new value and assigned to the Object Constructor. this.setState causes React to re-render the application and update the DOM. 
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  //use render as a prop to display features element.render  returns a description of what you want to see on the screen. this will display feature item. 
  render() {
    //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. Taking in array of features and creating a new list with features element and index of the element
    const features = Object.keys(this.props.features).map((feature, idx) => {
      // variable featureHash 
      const featureHash = feature + '-' + idx;
      //function with variable options that is equal to features props
      const options = this.props.features[feature].map(item => {
        //function with variable itemHash pulls JSON response and turns it into text with item name
        const itemHash = slugify(JSON.stringify(item));
        //return div element with key for itemHash and append it to feature item as a form (radio input) that takes in elements: type, id, className, name as string with feature. Props accessed by this.state.selected to check if a checbkbox is cheked or onchecked. Label triggers the onchange event to update feature with feature element and item element (actually checkbox is hidden). Each one of these selected attributes is mapped to a form input.
        
        //and event handler to update Feature when checked and feature label that adds in the item cost.
        //not sure of htmlFor works, HTML attribute, id of element the item Hash object component is bound to for the feature label dispalys item name with cost  

        //feature component 
        //feature item component 
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      //return feature and feature name as fieldset (form) with options for each feature class, feature name class, display feature, legend object component, fieldset object component 
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
            </legend>
          {options}
        </fieldset>
      );
    });

    //define summary variable that returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. Taking in array of features and creating a new list with features element and index of the element; display selected options for feature
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

//return summary option for each class name element, for each element appends an object component. Each one of these selected options attributes is mapped to a form input wih summary options.
//Summary Option component
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    //set variable for total goes through an array of selected properties of totals; takes in accumulator and current value and returns a single number output for summary component 
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
//return each component, display for app 
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
