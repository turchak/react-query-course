import * as React from 'react';
import { Toolbar, Typography, AppBar as MuiAppBar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <Link style={{ textDecoration: 'none' }} to={'/'}>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1, color: 'white' }}>
            React-query course
          </Typography>
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
}
