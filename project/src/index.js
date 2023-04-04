import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 import About from './Pages/About';
 import Docs from './Pages/Docs';
 import Home from './Pages/Home';


 const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
   },
   {
      path:"/About",
      element: <About/>
   },
   {
    path:"/docs",
    element: <Docs />
 },
 {
  path:"/home",
  element: <Home />
}
 ]);
 

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
