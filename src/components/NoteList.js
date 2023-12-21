import React, { useState } from 'react';
import { useNotes } from './NotesContext';

const NoteList = () => {
  const { notes, deleteNote, editNote } = useNotes();
  const [editIndex, setEditIndex] = useState(null);
  const [editedNote, setEditedNote] = useState({ title: '', description: '', color: '' });

  const handleDeleteClick = (index) => {
    deleteNote(index);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedNote(notes[index]);
  };

  const handleEditSave = (index) => {
    editNote(index, editedNote);
    setEditIndex(null);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleColorChange = (e, index) => {
    const { value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      color: value,
    }));
  };

  return (
    <div>
      <h2>Notes:</h2>
      {notes.length > 0 ? (
        <div className="card-container1">
          {notes.map((note, index) => (
            <div
              key={index}
              className="card1"
              style={{ backgroundColor: note.color }}
            >
              {editIndex === index ? (
                <div className='card11'>
                  <input
                    type="text"
                    name="title"
                    value={editedNote.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="description"
                    value={editedNote.description}
                    onChange={handleInputChange}
                  />
                  <input
                    type="color"
                    value={editedNote.color}
                    onChange={(e) => handleColorChange(e, index)}
                  />
                  <button onClick={() => handleEditSave(index)}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </div>
              ) : (
                <div className='card11'>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                  <button onClick={() => handleDeleteClick(index)}>Delete</button>
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default NoteList;