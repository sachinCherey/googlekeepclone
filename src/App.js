

import './App.css'

import MiniDrawer from './components/MiniDrawer';

import React from 'react';
import { NotesProvider } from './components/NotesContext';


function App() {

  return (
    <NotesProvider>
    <div className="App">
     <MiniDrawer/>
    </div>
    </NotesProvider>
  );
}

export default App;
