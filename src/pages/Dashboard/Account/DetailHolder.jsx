import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { colors } from '../../../constants/colors';

const DetailHolder = ({ sectionTitle, personalData }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" color={colors.secondary}>
          {sectionTitle}
        </Typography>
        <EditIcon />
      </Stack>
      {personalData.map(el => {
        return (
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="gray">
              {el.field}
            </Typography>
            <Typography variant="body2">{el.value}</Typography>
          </Stack>
        );
      })}
    </Box>
  );
};

export default DetailHolder;
