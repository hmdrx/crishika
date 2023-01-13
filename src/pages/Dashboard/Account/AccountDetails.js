import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DetailHolder from './DetailHolder';
// import { personalData , academicData} from '../../../data/personalData';
import Update from './Update';
import { useSelector } from 'react-redux';

const AccountDetails = () => {
  const {personal, academic} = useSelector(state => state.personalData);

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Update heading='update/change password' open={open} setOpen={setOpen} />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <DetailHolder
            sectionTitle="personal details"
            data={personal}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DetailHolder
            sectionTitle="academic details"
            data={academic}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ mx: 1, mt: 2, p: 1 }}>
            <Typography
              onClick={() => setOpen(true)}
              sx={{ display: 'inline-block', cursor: 'pointer' }}
            >
              Update/Change password
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountDetails;
