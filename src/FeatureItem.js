import React from 'react';
import FeatureOption from './FeatureOption';

function FeatureItem (props) {
  return (
    <section className="main__form">
      <div className="feature__name">{props.title}</div>
      <ul className="feature__list">
        {props.options && props.options.map((key, index, options,) =>
          <FeatureOption
           key={index}
           title={props.title}
           featureoption={options[index]}
           selected={props.selected}
           name={key.name}
           cost={key.cost}
           onClick={props.onClick}
           change={props.change}    
         />
         )}
     </ul>
 </section>
);
}

 export default FeatureItem;