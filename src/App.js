import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

//improve : ccs dots on dice, number of rolls took, track time, scoreboard
function App() {
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
    <main className="main">
        {tenzies && <Confetti/>}
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
        <div className='Timer'>
          {timer.ended - timer.started}
        </div>
        <button className="roll" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
    </main>
  );
}

export default App;
