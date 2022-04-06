import React from 'react';
import classes from './Die.module.css'

const Die = ({isHeld, id, number, holdDice}) => {
  return (
    <div 
        className={isHeld ? classes.held : classes.die} 
        onClick={() =>holdDice(id)}
    >
        {number}
    </div>
  );
};
export default Die;
