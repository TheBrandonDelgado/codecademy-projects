import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './app/store.js';
import { App } from './app/App.js';
const root = createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />)
};
render();

store.subscribe(render);
