// filepath: frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Datasets from './pages/Datasets';
import Papers from './pages/Papers';
import Tutorials from './pages/Tutorials';
import Failures from './pages/Failures';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Fade in timeout={400} key={location.pathname}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary', px: { xs: 1, sm: 3 } }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/failures" element={<Failures />} />
        </Routes>
      </Box>
    </Fade>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <AnimatedRoutes />
  </Router>
);

export default App;