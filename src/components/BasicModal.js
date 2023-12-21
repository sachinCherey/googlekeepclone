// BasicModal.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicTextFields from './BasicTextFields';
import { useNotes } from './NotesContext';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const { addNote, notes } = useNotes();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    const newNote = {
      'title': title,
      'description': description,
    };

    addNote(newNote);
    
    handleClose();
    
  };

  console.log(notes);

  return (
    <div>
      <Button onClick={handleOpen}>ADD</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Note</p>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <BasicTextFields setTitle={setTitle} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              cols={40}
              placeholder="write here.."
              style={{ resize: 'none' }}
            />
            <button onClick={handleClick}>Save it</button>
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
