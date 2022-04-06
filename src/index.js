import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

/*  
  TODO:
  добавить scss, при этом переделать текущие на цсс модули,
  отслеживать время
  состояние приложения перевести на редукс,
  точки вместо цифр,
  добавить скор-боард с формой для отправки (пока в локал сторедже)
*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
