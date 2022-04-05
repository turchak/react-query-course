import * as React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type PageProps = {
  children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            Course
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: '0 16px', flexGrow: 1 }}>{children}</Box>
    </Box>
  );
}
