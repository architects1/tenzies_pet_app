import { render } from '@testing-library/react';
import React from 'react';

const Die = (props) => {
  return (
    <div 
        className={props.isHeld ? 'die held' : 'die'} 
        onClick={() =>props.holdDice(props.id)}
    >
        {props.number}
    </div>
  );
};
export default React.memo(Die);
