import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import { colors } from '../../../constants/colors';

const Report = () => {
  const optionsArr = [0, 1, 2, 3];
  const options = optionsArr.map((el, index) => {
    return (
      <Grid item xs={6} key={index}>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            p: 1,
            border: 1,
            borderColor: colors.gray,
            borderRadius: 1,
            position: 'relative',
          }}
        >
          <Typography
            variant="caption"
            color="white"
            sx={{
              textAlign: 'center',
              px: 1,
              borderRadius: 3,
              position: 'absolute',
              left: 6,
              top: -12,
              bgcolor: colors.secondary,
            }}
          >
            Your selection
          </Typography>
          Zenthrotull
        </Typography>
      </Grid>
    );
  });
  return (
    <Container disableGutters>
      <Stack
        sx={{ minheight: '100vh' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            borderRadius: 1,
            p: { xs: 2, lg: 6 },
            pb: 4,
            maxWidth: '80rem',
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Result: 8/10</Typography>
            <Typography variant="body2">Time: 10 minute</Typography>
          </Stack>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
              Q.1
              <CheckCircleIcon color="success" fontSize="1.2rem" />
            </Typography>
            <Typography>
              Who is the father of agronomy and how he became lorem ipsum igosho
              nos porso nato kalo umaro guato makara qakarmat agolia.
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={4} sx={{ mt: 4 }}>
              {options}
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Report;
