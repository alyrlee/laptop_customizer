import React from 'react'
import FeatureOption from './FeatureOption'
import slugify from 'slugify';


export default function FeatureItem(props) {
const {feature, item}= props;

return (
    <div className="feature__item">
                <input 
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={this.props.type}
                    onClick={this.props.click}></input>
</div>
)
};      