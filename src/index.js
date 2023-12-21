import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotesProvider } from './components/NotesContext';
// import Tabs from './components/Tabs'
ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
