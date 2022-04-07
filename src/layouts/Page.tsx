import * as React from 'react';
import { Box } from '@mui/material';
import { AppBar } from 'components';

type PageProps = {
  children: React.ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        backgroundColor: 'rgb(231, 235, 240);',
      }}
    >
      <AppBar />
      <Box sx={{ padding: '0 16px', flexGrow: 1 }}>{children}</Box>
    </Box>
  );
}
