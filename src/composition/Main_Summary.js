import React from 'react';
import FEATURES from './index.js'

//import from SummaryOption and Summary Total
//contain the Summary component


import React from 'react';
import SummaryTotal from './Summary_Total';
import SummaryOption from './Summary_Option';

function MainSummary(props) {

    return (
        <section className="main__summary" role="region">
        {Object.keys(props.selected)
            .map((key, index, title) =>
            <SummaryOption 
                key={key}
                index={index}
                name={props.selected[key][0]}
                title={Object.keys(props.selected)[index]}
                cost={props.selected[key][1]}
                selectedParts={props.selected}
            />
        )}
            
        <Total 
             total={props.total}
        />
        </section>
    )
        }


export default MainSummary;