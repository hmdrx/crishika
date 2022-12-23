import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../../../constants/colors';

const Quiz = () => {
  const optionsArr = [0, 1, 2, 3];
  const options = optionsArr.map(el => {
    return (
      <Grid item xs={6} sx={{}}>
        <Button sx={{ textTransform: 'unset' }} variant="outlined" fullWidth>
          Zenthrotull
        </Button>
      </Grid>
    );
  });

  return (
    <Container disableGutters>
      <Stack
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          p: { xs: 2, lg: 6 },
          pb: 4,
          maxWidth: '80rem',
          minHeight: window.innerHeight,
          m: 'auto'
        }}
        justifyContent='space-between'
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ position: 'sticky', top: 0, p: 1, bgcolor: colors.bg }}
          >
            <Typography variant="body2">Question: 1/10</Typography>
            <Typography variant="body2">Time: 10 minute</Typography>
          </Stack>
          <Typography sx={{ mt: 4 }}>
            Who is the father of agronomy and how he became lorem ipsum igosho
            nos porso nato kalo umaro guato makara qakarmat agolia mokato naqato
            Who is the father of agronomy and how he became lorem ipsum igosho
            Who is the father of agronomy and how he became lorem ipsum igosho
            Who is the father of agronomy and how he became lorem ipsum igosho
            Who is the father of agronomy and how he became lorem ipsum
          </Typography>
        </Box>
        <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
          {options}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Quiz;
