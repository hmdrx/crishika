import { useState } from 'react';
import './Test.css';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { Container, Stack } from '@mui/material';
import BeforeQuiz from '../pages/Dashboard/Quiz/BeforeQuiz';
import Performance from '../pages/Dashboard/Performance/Performance';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Test = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Container disableGutters >
      {/* Background UI */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: 'linear-gradient(#b8f1d6,#25bf77)',
          zIndex: '-9999',
        }}
      >
        <Box
          sx={{
            position: 'inherit',
            right: '5%',
            top: '25%',
            width: 400,
            height: 400,
            borderRadius: '51% 49% 60% 40% / 74% 62% 38% 26% ',
            background: '#25bf77',
            boxShadow: '0px 0px 5px 5px rgba(37,191,119,1)',
          }}
        />
        <Box
          sx={{
            position: 'inherit',
            top: '10%',
            left: '20%',
            width: 180,
            height: 180,
            borderRadius: '59% 41% 49% 51% / 74% 84% 16% 26% ',
            background: '#25bf77',
            boxShadow: '0px 0px 5px 5px rgba(37,191,119,1)',
          }}
        />
        <Box
          sx={{
            position: 'inherit',
            bottom: 0,
            width: 280,
            height: 280,
            borderRadius: '59% 41% 49% 51% / 74% 84% 16% 26% ',
            background: '#25bf77',
            boxShadow: '0px 0px 5px 5px rgba(37,191,119,1)',
          }}
        />
      </Box>
      <Stack
        sx={{ minHeight: '100vh', py:4 }}
        alignItems="center"
        // justifyContent="center"
      >
        <Box
          sx={{
            flex:1,
            width: '100%',
            maxWidth: '100rem',
            borderRadius: 5,
            background: 'rgba(255, 255, 255, 0.2)',
            /* background: transparent, */
            backdropFilter: 'blur(1.8rem)',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="basic tabs example"
              >
                <Tab label="Quiz" {...a11yProps(0)} />
                <Tab label="Account" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0}>
                {/* Quiz */}
                <Performance/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* Account */}
                <BeforeQuiz/>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Test;
