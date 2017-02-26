import React from 'react';
import ReactDOM from 'react-dom';
import style from "./app.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './modules/main/containers/App.js';

const initialState = {
  trackNumber: 0
}

function playlist(state = initialState, action){
  if(action.type === 'ADD_TRACK'){
    return {
      ...state,
      trackNumber: action.payload
    }
  }
  return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//внутрь передаем редюсеры

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
)


console.log("Hello from debug and app.js and from webpack");






store.subscribe(() => {
  console.log("subscribe: ", store.getState());
})

store.dispatch({ type: "ADD_TRACK", payload: 1 })
