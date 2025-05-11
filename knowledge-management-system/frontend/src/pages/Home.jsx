import React from 'react';
import ResourceList from '../components/ResourceList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => (
  <Container maxWidth="md">
    <Box my={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the AI and Machine Learning Research Wiki
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Browse and share datasets, research papers, model-building tutorials, and failure case studies.
      </Typography>
      <ResourceList />
    </Box>
  </Container>
);

export default Home;