import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { worker } from '@uidotdev/react-query-api';

const theme = createTheme();
const queryClient = new QueryClient();
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

new Promise((res) => setTimeout(res, 100))
  .then(
    async () =>
      await worker.start({
        quiet: true,
        onUnhandledRequest: 'bypass',
      })
  )
  .then(() => {
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </React.StrictMode>
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
