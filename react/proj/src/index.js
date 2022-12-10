import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from `./Home`;
import About from `./About`;
import Blog from `./Blog`;
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let Routes = createBrowserRouter([
  {
    path:'/', element: <App/>, errorElement:<h3> 404</h3>,
    children:[
      { path:`Home`,element: <Home />},
      { path:`About`,element: <About />},
      { path:`blog`,element: <Blog />},
    ]
  }
])
root.render(
<RouterProvider router={Routes}
);

