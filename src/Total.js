import React from 'react'

export default function Total(props) {
    const { label, value } = props;
    const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
      
return (
    <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
    {USCurrencyFormat.format(total)}
    </div>
</div>
)
};