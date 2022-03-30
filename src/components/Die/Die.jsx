import React from 'react';

const Die = ({isHeld, id, number, holdDice}) => {
  return (
    <div 
        className={isHeld ? 'die held' : 'die'} 
        onClick={() =>holdDice(id)}
    >
        {number}
    </div>
  );
};
export default Die;
