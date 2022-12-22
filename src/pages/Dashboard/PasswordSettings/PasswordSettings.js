import React from 'react';
import { Container, Stack } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UpdatePassword from './UpdatePassword';
import ResetPassword from './ResetPassword';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PasswordSettings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{  }}>
      <Box sx={{ width: '100%',  }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered >
            <Tab label="Update/Change" {...a11yProps(0)} />
            <Tab label="Reset" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Stack alignItems='center' >
          <TabPanel value={value} index={0}>
            <UpdatePassword />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ResetPassword />
          </TabPanel>
        </Stack>
      </Box>
    </Container>
  );
};

export default PasswordSettings;
