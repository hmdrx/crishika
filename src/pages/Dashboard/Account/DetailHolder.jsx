import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Update from './Update';

const DetailHolder = ({ sectionTitle, data }) => {
  const [open, setOpen] = React.useState(false);

  const personalData = {
    field: Object.keys(data),
    value:  Object.values(data),
  }


  return (
    <>
      <Update heading={sectionTitle} open={open} setOpen={setOpen} data={personalData} />
      <Box
        sx={{
          mx: 1,
          p: 1,
          borderRadius: 2,
          height: '100%',
          bgcolor: '#25bf7720',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontWeight: '500', textTransform: 'capitalize' }} variant="body1">
            {sectionTitle}
          </Typography>
          <EditIcon
            onClick={() => {
              setOpen(true);
            }}
            fontSize="small"
            sx={{ cursor: 'pointer' }}
          />
        </Stack>
        {personalData.field.map((el, i) => (
          <Stack
          key={el}
            sx={{
              bgcolor: '#25bf7720',
              p: 1,
              my: 1,
              borderRadius: 2,
            }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography sx={{ flex: 1, textTransform: 'capitalize' }} variant="body2">
              {el}
            </Typography>
            <Typography sx={{ flex: 2 }} variant="body2">
              {personalData.value[i]}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default DetailHolder;
