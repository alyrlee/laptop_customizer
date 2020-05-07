import React from 'react';
import Feature from './Feature';

//import features from Features
//contain feature item 

function featureItem (props){
    const  {features, selected } = props;
    return (
        <div key={itemHash} className="feature__item">
        <Feature /> 
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
    }

export default featureItem;