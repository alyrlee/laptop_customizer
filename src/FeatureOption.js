import React from 'react';
// import slugify from 'slugify';
 import FEATURES from './index';
 import FeatureItem from './FeatureItem';

// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   });

class FeatureOption extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     features: FEATURES,
     featureitem: FeatureItem, 
     selected: { },
  };

  this.handleClick = this.handleClick.bind(this)
  this.total = this.total.bind(this)
}


  handleClick() {
    this.props.onClick && this.props.onClick(this.props.name, this.props.cost, this.props.title)
}
  
  render() {
    return (
      <div className="feature" >
           <li key={this.props.index} className="feature__item"
            onClick={() => this.handleClick()} >
            <div className="feature_option">
            {this.props.name} (${this.props.cost})
          </div>
        </li>
      </div>
    );
}
}


export default FeatureOption;