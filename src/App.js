import { useSelector } from 'react-redux';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';
import LaunchWindow from './components/LaunchWindow/LaunchWindow';

function App() {

  const { isGameStarted } = useSelector(state => state.gameReducer)

  return (
      <main className="main">
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          { isGameStarted ? <GameBoard /> : <LaunchWindow /> } 
      </main>
  );
}

export default App;
