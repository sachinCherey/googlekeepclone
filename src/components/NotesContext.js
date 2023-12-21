import React, { createContext, useContext, useEffect, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const updateLocalStorage = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [newNote, ...prevNotes];
      updateLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((_, i) => i !== index);
      updateLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  const editNote = (index, newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note, i) => (i === index ? newNote : note));
      updateLocalStorage(updatedNotes);
      return updatedNotes;
    });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};