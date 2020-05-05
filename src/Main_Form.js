import React from 'react';
import FeatureItem from './FeatureItem';
import FEATURES from './index';

function MainForm (props) {

    const features = Object.keys(FEATURES)
    .map( key => 
      <FeatureItem 
        key={key}
        features={FEATURES}
        selected={props.selected}
        featureTitle={key}
        handleUpdate={props.handleUpdate} />
    ); 

  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATION</h3>
      {features}
    </section>
  )
}


export default MainForm;