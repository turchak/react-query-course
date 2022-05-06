import { Box, TextField } from '@mui/material';
import * as React from 'react';

export default function Search() {
  return (
    <Box>
      <form>
        <TextField label="Search" color="primary" fullWidth />
      </form>
    </Box>
  );
}
