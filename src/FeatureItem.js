import React from 'react';


export default function FeatureItem(props) {
const {features, selected,featureTitle, handleUpdate}= props;

const options = features[featureTitle].map((item, index) =>
    <ItemOption
      key={index}
      item={item}
      selected={selected}
      featureTitle={featureTitle}     
      handleUpdate={handleUpdate}
    />
  );


  return (
    <div className="feature" >
       <li key={this.props.index} className="feature__item"
            onClick={() => this.handleClick()}
            style={{backgroundColor: this.selectedColor()}}
          >
    <div className="feature_option">
          {this.props.name} (${this.props.cost})
    </div>
    </li>
  </div>
);
}  

export default FeatureItem;