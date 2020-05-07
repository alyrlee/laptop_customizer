import React from 'react';

function SummaryTotal (props){
    return(
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
        </div>
        </div>
    );
}

  const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
  );

export default SummaryTotal;