import React from 'react';
import Feature from './Feature';
import slugify from 'slugify';

export default function FeatureOption(props){
    const {feature, option, idx}= props;
return (
    <fieldset className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.state.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />
    <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
          
);


