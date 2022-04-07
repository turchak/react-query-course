import * as React from 'react';
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar as MuiAppBar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ display: 'flex', gap: 2 }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          Course
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
