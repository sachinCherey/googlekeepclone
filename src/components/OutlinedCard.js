import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from './BasicModal'


const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2">
        hi there,something in mind! take a note.
      </Typography>
    </CardContent>
    <CardActions>
      <BasicModal/>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
