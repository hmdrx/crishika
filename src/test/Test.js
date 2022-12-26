import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { useState } from 'react';
import { ListItem } from '@mui/material';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = value => {
    setSelectedIndex(value);
  };

  return (
    <Box>
      <List>
        {['Index', 'Hello', 'Lelo'].map(el => (
          <ListItem>
            <ListItemButton
              selected={selectedIndex === el}
              onClick={handleListItemClick.bind(this, el)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={el} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
