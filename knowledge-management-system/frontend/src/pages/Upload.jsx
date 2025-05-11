import React from 'react';
import UploadForm from '../components/UploadForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Upload = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Upload a New Resource
      </Typography>
      <UploadForm />
    </Box>
  </Container>
);

export default Upload;