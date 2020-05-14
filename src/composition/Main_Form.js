import React, {Component} from 'react';
// import FEATURES from './src/index.js';
import FeatureItem from './Feature_Item';
// import Feature from './Feature';

class MainForm extends Component {
 render(props){
  return (
    <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {Object.keys(props.features)
            .map((key, index, title) => 
                <FeatureItem
                    key={index}
                    index={index}
                    title={title[index]}
                    options={props.features[key]}
                    selected={props.selected}
                    onClick={props.onClick} 
                />
        )}
    </section>
);
}
}

export default MainForm;