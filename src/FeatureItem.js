import React from 'react';
import FeatureOption from './FeatureOption';

function FeatureItem (props) {
    const { features, selected, featureTitle, handleUpdate } = props;
  
    const options = features[featureTitle].map((item, index) =>
      <FeatureOption
        key={index}
        item={item}
        selected={selected}
        featureTitle={featureTitle}     
        handleUpdate={handleUpdate}
      />
    );
  
    return (
      <div className="feature">
        <div className="feature__name">{featureTitle}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    );
  }

 export default FeatureItem;