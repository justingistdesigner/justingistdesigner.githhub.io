import React from 'react';
import './App.css';
import ResumePage from './pages/ResumePage/ResumePage';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { GlobalThemes } from './ThemeManager';
import RenderComponent from './components/RenderComponent/RenderComponent';

function App() {
  
  const routes = Object.keys(GlobalThemes);
  const router = createHashRouter([
    ...routes.map(path => ({
      path: path,
      element: <RenderComponent />
    })),
    {
      path: "*",
      element: <RenderComponent />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
