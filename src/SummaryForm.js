import React from 'react'

export default function Summary(props) {
  const { featureTitle, selected } = props;

return (
         <div className="summary__option">
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
         {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    };


           