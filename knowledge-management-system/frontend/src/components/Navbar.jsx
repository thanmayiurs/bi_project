import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Home', href: '/', icon: <HomeIcon /> },
  { label: 'Datasets', href: '/datasets', icon: <StorageIcon /> },
  { label: 'Papers', href: '/papers', icon: <ArticleIcon /> },
  { label: 'Tutorials', href: '/tutorials', icon: <SchoolIcon /> },
  { label: 'Failures', href: '/failures', icon: <ReportProblemIcon /> },
  { label: 'Upload', href: '/upload', icon: <CloudUploadIcon /> },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 36, height: 36 }}>
                <MenuIcon sx={{ color: theme.palette.background.paper }} />
              </Avatar>
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: { bgcolor: theme.palette.background.paper, minWidth: 240 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', p: 2, pb: 0 }}>
                <Avatar sx={{ bgcolor: theme.palette.secondary.main, mr: 1 }}>
                  <MenuOpenIcon sx={{ color: theme.palette.background.paper }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                  Menu
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <List>
                {navItems.map((item) => (
                  <ListItem
                    button
                    component={Link}
                    to={item.href}
                    key={item.label}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      borderRadius: 2,
                      mx: 1,
                      my: 0.5,
                      py: 1,
                      px: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      color: theme.palette.secondary.main,
                      '&:hover': {
                        bgcolor: theme.palette.secondary.light,
                        color: theme.palette.primary.main,
                        '& .MuiSvgIcon-root': {
                          color: theme.palette.primary.main,
                        },
                      },
                    }}
                  >
                    <Box sx={{ minWidth: 28, color: 'inherit' }}>
                      {React.cloneElement(item.icon, { sx: { color: 'inherit' } })}
                    </Box>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: { color: 'inherit', fontWeight: 600, fontFamily: '"Sora", sans-serif' }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: theme.palette.secondary.main,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
          }}
        >
          AI & ML Research Wiki
        </Typography>
        {!isMobile && (
          <Box>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item.href}
                key={item.label}
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontFamily: '"Sora", sans-serif',
                  textTransform: 'none',
                  mx: 1,
                  bgcolor: item.label === 'Upload' ? theme.palette.secondary.main : theme.palette.primary.main,
                  borderRadius: 2,
                  fontSize: '1.08rem',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: item.label === 'Upload' ? theme.palette.background.paper : theme.palette.secondary.main,
                    color: item.label === 'Upload' ? theme.palette.secondary.main : theme.palette.primary.main,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;