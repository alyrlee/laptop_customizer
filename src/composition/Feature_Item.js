import React, { Component } from 'react';

//contain features section
    //feature name
class Feature extends Component{

render(props){
    const { features, selected, featureTitle, handleUpdate } = props;
    
    const options = features[featureTitle].map((item, index) => {
    updateFeature = (feature, newValue) => {
    
  const selected = Object.assign({}, this.state.selected);
      selected[feature] = newValue;
      this.setState({
        selected
      });
    };
  );

  return (
    <div className="feature_item">

    onClick={() => handleUpdate(featureTitle, item)}>
    {item.name}
    ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
      .format(item.cost)})
    </div>
  );
}
}

export default Feature_Item;