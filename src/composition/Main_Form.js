import React from 'react';
import FEATURES from './src/index.js'
import FeatureItem from './Feature_Item';

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
        <h1>ELF Computing | Laptops</h1>
        <h2>Customize your laptop</h2>
          {features}
     </section>
      );
    }

export default MainForm;