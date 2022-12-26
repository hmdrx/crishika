import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Typography,
} from '@mui/material';

import myProfileImage from '../../assets/images/logo-512.png';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { colors } from '../../constants/colors';
import { useState } from 'react';

const drawerWidth = 240;

const Layout = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [listSelected, setListSelected] = useState(1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const clickHandler = value => {
    setListSelected(value);
  };

  const drawer = (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'primary.main',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              width: '14rem',
              height: '14rem',
              borderRadius: '8rem',
              overflow: 'hidden',
              border: '1px solid white',
            }}
          >
            <Box sx={{ width: 1 }} component="img" src={myProfileImage} />
          </Box>
          <Typography variant="h6" color="white">
            Humendra
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Overview'} sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          {['Start Test', 'Performance'].map(text => (
            <ListItemButton
              key={text}
              selected={listSelected === text}
              onClick={clickHandler.bind(this, text)}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {['Account Details', 'Password Settings'].map((text, index) => (
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'white' }} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: colors.secondary,
        }}
      >
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
          <NotificationsIcon sx={{ marginLeft: 'auto' }} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
