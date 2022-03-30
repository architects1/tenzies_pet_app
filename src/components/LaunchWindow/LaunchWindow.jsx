import React from 'react'

const LaunchWindow = () => {
  return (
    <div className="launchWindow">
        <div className="viewScoresButton" onClick={()=> false}>
            View scores
        </div>
        <div class="startButton" onClick={()=> false}>
            Start game
        </div>
    </div>
  )
}

export default LaunchWindow