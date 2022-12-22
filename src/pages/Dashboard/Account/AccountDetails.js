import React from 'react';

import { Container } from '@mui/material';
import DetailHolder from './DetailHolder';
import { personalData } from '../../../data/personalData';
import { academicData } from '../../../data/academicData';

const AccountDetails = () => {
  return (
    <Container>
      <DetailHolder
        sectionTitle="Personal Details"
        personalData={personalData}
      />
      <DetailHolder
        sectionTitle="Academic Details"
        personalData={academicData}
      />
    </Container>
  );
};

export default AccountDetails;
