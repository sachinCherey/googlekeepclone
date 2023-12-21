import React, { useState } from 'react';
import { useNotes } from './NotesContext';

const NoteList = () => {
  const { notes, deleteNote, editNote } = useNotes();
  const [editIndex, setEditIndex] = useState(null);
  const [editedNote, setEditedNote] = useState({ title: '', description: '' });

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

  

  return (
    <div>
      <h2>Notes:</h2>
      {notes.length > 0 ? (
        <div className="card-container1">
          {notes.map((note, index) => (
            <div key={index} className="card1">
              {editIndex === index ? (
                <div>
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
                  <button onClick={() => handleEditSave(index)}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </div>
              ) : (
                <div>
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
