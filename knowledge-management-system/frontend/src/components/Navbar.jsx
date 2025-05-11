import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.15)',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <Toolbar sx={{ minHeight: 72 }}>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: theme.palette.secondary.main,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            transition: 'color 0.3s',
          }}
        >
          AI & ML Research Wiki
        </Typography>
        <Box>
          <Button component={Link} to="/" sx={navBtn(theme)}>Home</Button>
          <Button component={Link} to="/datasets" sx={navBtn(theme)}>Datasets</Button>
          <Button component={Link} to="/papers" sx={navBtn(theme)}>Papers</Button>
          <Button component={Link} to="/tutorials" sx={navBtn(theme)}>Tutorials</Button>
          <Button component={Link} to="/failures" sx={navBtn(theme)}>Failures</Button>
          <Button component={Link} to="/upload" sx={navBtn(theme, true)}>Upload</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navBtn = (theme, highlight) => ({
  color: highlight ? theme.palette.primary.main : theme.palette.primary.contrastText,
  fontWeight: 600,
  fontFamily: '"Sora", sans-serif',
  textTransform: 'none',
  mx: 1,
  bgcolor: highlight ? theme.palette.secondary.main : theme.palette.primary.main,
  borderRadius: 2,
  fontSize: '1.08rem',
  transition: 'all 0.2s',
  '&:hover': {
    bgcolor: highlight ? theme.palette.background.paper : theme.palette.secondary.main,
    color: highlight ? theme.palette.secondary.main : theme.palette.primary.main,
  },
});

export default Navbar;