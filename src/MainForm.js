import React from 'react';
import FeatureItem from './FeatureItem';


function MainForm(props) {
    return (
        <section className="main__form" role="region">
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

export default MainForm;