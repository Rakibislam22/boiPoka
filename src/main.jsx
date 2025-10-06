import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home.jsx';
import Banner from './components/Banner.jsx';
import Error from './components/pages/Error.jsx';
import Books from './components/books/Books.jsx';
import ListedBooks from './components/pages/ListedBooks.jsx';
import PagesToRead from './components/pages/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/",
        Component: Banner
      },
      {
        path: "/listedBook",
        Component: ListedBooks
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead
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
