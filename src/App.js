import { Provider } from 'react-redux';
import store from './redux/store';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <main className="main">
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <GameBoard/>
      </main>
    </Provider>
  );
}

export default App;
