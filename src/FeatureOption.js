import React from 'react';
import slugify from 'slugify';
import FEATURES from './index';
import FeatureItem from './FeatureItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

 


function FeatureOption (props) { 
    const { handleUpdate, featureClass, feature, idx, item } = props;
    // const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        // const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <li className="feature__item"> 
                <div className={featureClass} 
    
                onClick={() => handleUpdate(feature.name, feature.item)}                        >
                    {item.name}
            ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(item.cost)})
            </div>
            </li>
          );
          }    
          
    
          
           
   
          
          
          
        
export default FeatureOption;