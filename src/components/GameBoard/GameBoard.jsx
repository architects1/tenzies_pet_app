import { useState, useEffect} from 'react';
import Die from '../Die/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const GameBoard = () => {
  const [dice,setDice] = useState(allNewDice())
  const [tenzies,setTenzies] = useState(false);
  const [timer,setTimer] = useState({started:new Date(),ended:new Date()});
  const [timerId,setTimerId] = useState(undefined);

  useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld)
    const allSameNumber = dice.every(die => die.number === dice[0].number)
    if (allHeld && allSameNumber){
      setTenzies(true);
    }  
  },[dice])

  useEffect(()=>{
      if(tenzies){
        clearInterval(timerId);
        setTimerId(undefined);        
      }else{
        setTimerId(setInterval(updateTimer,100))
      }
  },[tenzies])

  function updateTimer(){
    setTimer(prevTimer => {
     return {...prevTimer, ended: new Date()}
    })
  }

  function showTimer(){

  }

  function newDie(){
    return {
      number: Math.floor(Math.random() * (6 - 1)) + 1,
      isHeld: false,
      id:nanoid()
    }
  }

  function allNewDice(){
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        number: Math.floor(Math.random() * (6 - 1)) + 1,
        isHeld: false,
        id:nanoid()
      })
    }
    return dice;
  }

  function rollDice(){
    if(tenzies){
      setTenzies(false)
      setDice(allNewDice)
    }else{
      setDice(oldDice => 
        oldDice.map(oldDie =>
          oldDie.isHeld ? 
          oldDie : 
          newDie()
        )
      )
    }
  }

  function holdDice(dieId){
    setDice(oldDice => 
      oldDice.map((die) =>
       dieId === die.id ? 
          {...die, isHeld:!die.isHeld } : 
          die 
      )
    )
  }
  
  return (
    <div className='gameBoard'>
      {tenzies && <Confetti/>}
        <div className="dice">
          {dice.map((die) => 
            <Die 
              key={die.id} 
              number={die.number} 
              id={die.id} 
              isHeld={die.isHeld} 
              holdDice={holdDice}
            /> 
          )}
        </div>
        <button className="roll" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
    </div>
  )
}

export default GameBoard  
