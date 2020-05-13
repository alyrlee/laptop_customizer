//import from SummaryOption and Summary Total
//contain the Summary component
import React, {Component} from 'react';
import SummaryTotal from './Summary_Total';
import SummaryOption from './Summary_Option';

class MainSummary extends Component {
    render(props) {
     return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
         <SummaryOption />
         <SummaryTotal />   
       </section>>      
     <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(props.total) }
     </div>         

          )
     }
}


export default MainSummary;