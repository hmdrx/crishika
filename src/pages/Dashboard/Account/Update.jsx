import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  academicInfo,
  personalInfo,
} from '../../../redux/personal-data-reducer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: 480 },
  bgcolor: '#ffffff43',
  backdropFilter: 'blur(2rem)',
  boxShadow: 24,
  borderRadius: 2,
  py: 2,
  px: 4,
};

const Update = ({ heading, open, setOpen, data }) => {
  const [updatePersonalInfo, setUpdatePersonalInfo] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setUpdatePersonalInfo(data);
  }, [data]);

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeHandler = (i, event) => {
    const val = event.target.value;
    setUpdatePersonalInfo(prev => {
      const updatedValue = prev.value.fill(val, i, i + 1);
      return {
        ...prev,
        value: updatedValue,
      };
    });
  };

  const onSaveHandler = () => {
    const mergedFieldValue = updatePersonalInfo.field.map((el, i) => ({
      [el]: updatePersonalInfo.value[i],
    }));

    const toBeUpdateValue = Object.assign(...mergedFieldValue, {});
    if (heading === 'personal details') {
      dispatch(personalInfo(toBeUpdateValue));
    } else {
      dispatch(academicInfo(toBeUpdateValue));
    }
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{ textTransform: 'capitalize' }}
              variant="h6"
              component="h2"
            >
              {heading}
            </Typography>

            {updatePersonalInfo &&
              updatePersonalInfo.field.map((field, i) => (
                <TextField
                  key={field}
                  label={field}
                  margin="normal"
                  fullWidth
                  sx={{ textTransform: 'capitalize' }}
                  size="small"
                  value={updatePersonalInfo.value[i]}
                  onChange={onChangeHandler.bind(this, i)}
                />
              ))}

            <Stack sx={{ mt: 2 }} direction="row" justifyContent="flex-end">
              <Button
                sx={{ mr: 3 }}
                onClick={handleClose}
                variant="outlined"
                color="btnWhiteOutlined"
              >
                Cancel
              </Button>
              <Button
                onClick={onSaveHandler}
                disableElevation
                variant="contained"
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Update;
