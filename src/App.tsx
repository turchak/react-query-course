import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { paths } from 'routes';
import { Issues, Issue } from 'pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.issues} element={<Issues />} />
        <Route path={paths.issue} element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
