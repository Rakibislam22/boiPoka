import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home.jsx';
import Banner from './components/Banner.jsx';
import Error from './components/pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/",
        Component: Banner
      }
    ],
    errorElement: <Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
