import React,{Component} from 'react'
import FEATURES from './src/index'
import FeatureItem from './FeatureItem'

class Feature extends Component{
  render(props){
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
    <div>
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATION</h3>
      {features}
    </section>
   </div> 
  )
  }
}

export default Feature


