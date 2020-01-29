import React from 'react';
import './App.scss';

import Header from './components/Header';
import Notes from './components/Notes';

import { NoteProvider } from './components/NoteContext';

function App() {
  return (
    <NoteProvider>
      <Header />
      <Notes />
    </NoteProvider>
  );
}

export default App;
