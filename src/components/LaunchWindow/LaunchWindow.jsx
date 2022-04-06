import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGame } from '../../redux/actions';
import Button from '../../UI/Button/Button'
import classes from './LaunchWindow.module.css'
const LaunchWindow = () => {

  const dispatch = useDispatch();

  return (
    <div className={classes.LaunchWindow}>
        <Button onClick={()=> console.log('Показать скорбоард')}>
            View scores
        </Button>
        <Button onClick={()=> dispatch(startGame())}>
            Start game
        </Button>
    </div>
  )
}

export default LaunchWindow