import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from 'routes';
import { Issues } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.issues()} element={<Issues />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
