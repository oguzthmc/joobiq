import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Home</h1>
        <a href="about">Go to About page</a>
      </div>
    ),
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>About page</h1>
        <a href="/">Back to Home</a>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
