import React from 'react'

const Timer = (props) => {
    const [timer,setTimer] = useState({started:new Date(),ended:new Date()});
    const [timerId,setTimerId] = useState(undefined);
      
    function updateTimer(){
        setTimer(prevTimer => {
            return {...prevTimer, ended: new Date()}
        })
    }

    function showTimer(){

    }
    
    return (
      <div className='Timer'>
        {timer.ended - timer.started}
      </div>
    )
}

export default Timer