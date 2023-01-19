import { createSlice } from '@reduxjs/toolkit';

export const personalDataReducer = createSlice({
  name: 'personalData',
  initialState: {
    personal: {
      name: 'Humendra',
      email: 'test.hum@gmail.com',
      mobile: '9999999999',
    },
    academic: {
      degree: 'B.Sc. Agriculture',
      status: 'Passout',
      college: 'BTC Collge of Agriculture',
    },
  },
  reducers: {
    personalInfo: (state, action) => {
      return {
        ...state,
        personal: {
          name: action.payload.name,
          email: action.payload.email,
          mobile: action.payload.mobile,
        },
      };
    },
    academicInfo: (state, action) => {
      return {
        ...state,
        academic: {
          degree: action.payload.degree,
          status: action.payload.status,
          college: action.payload.college,
        },
      };
    },
  },
});

export const { personalInfo, academicInfo } = personalDataReducer.actions;

export default personalDataReducer.reducer;
