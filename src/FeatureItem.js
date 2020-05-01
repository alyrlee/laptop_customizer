import React from 'react';
import FeatureOption from './FeatureOption';
import slugify from 'slugify';
import { render } from 'react-dom';


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


return(
    <div className="feature">
</div>
);
}  