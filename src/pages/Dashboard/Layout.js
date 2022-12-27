import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import classes from '../Auth/Auth.module.css';
import { Outlet } from 'react-router-dom';
import { Container, Paper, Stack } from '@mui/material';

const Layout = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
    <Box sx={{p:2, height: '100vh',bgcolor: '#25BF7783'}} >
      <Paper
        elevation={3}
        sx={{ bgcolor: '#25BF7783', height: '100%', overflow: 'auto' }}
      >
        <Stack
          direction="row"
        >
          <Box
            sx={{ width: '100%', maxWidth: 360, }}
          >
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </Box>
          <Container>
            <Outlet />
          </Container>
        </Stack>
      </Paper>
    </Box>
    </>

  );
};

export default Layout;
