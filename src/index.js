import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './reducers/Reducer';
import {Provider} from 'react-redux';
import './styles/styles.css';

/*
DEFAULT REACT ELEMENTS RENDER
const element = React.createElement('ol', null, 
  tasks.map((task, index) =>  React.createElement('li', {key: index}, task))
);
const jsxElement = 
    <div>
      <h3>React (Create)Elements Render</h3>
        {element}
      <h3>JSX Elements Render</h3>
    </div>;*/
const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
