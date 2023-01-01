import { Box, Button, FormControlLabel,   Radio, RadioGroup, Stack, Typography } from '@mui/material';
import React from 'react';
import DashboardBg from '../../../components/DashboardBg';

const Quiz = () => {

  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <DashboardBg>
      <Stack sx={{ minHeight: '100vh', py: {md: 8} ,}} alignItems="center">
        <Stack
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '100rem',
            borderRadius: 5,
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(2.2rem)',
            px: {md: 8, xs: 2},
            py: 4,
            overflow: 'hidden'
          }}
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ position: 'sticky', top: 0, p: 1,  background: 'rgba(255, 255, 255, 0.2)', }}
            >
              <Typography variant="body2">Question: 1/10</Typography>
              <Typography variant="body2">Time: 10 minute</Typography>
            </Stack>
            <Typography sx={{ mt: 4 }}>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia mokato
              naqato Who is the father of agronomy and how he became lorem ipsum
              igosho Who is the father of agronomy and how he became lorem ipsum
              igosho Who is the father of agronomy and how he became lorem ipsum
              igosho Who is the father of agronomy and how he became lorem ipsum
            </Typography>
          </Box>
          <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio />} label="Zenthrotull" />
        <FormControlLabel value="1" control={<Radio />} label="Zenthrotull" />
        <FormControlLabel value="2" control={<Radio />} label="Zenthrotull" />
        <FormControlLabel value="3" control={<Radio />} label="Zenthrotull" />
      </RadioGroup>
         
          <Stack sx={{mt: 4,}} direction='row' justifyContent='space-between' >
            <Button disableElevation disableRipple variant='contained' size='small' >Previous</Button>
            <Button disableElevation disableRipple variant='contained' size='small' >Next</Button>
          </Stack>
      
        </Stack>
      </Stack>
    </DashboardBg>
  );
};

export default Quiz;
