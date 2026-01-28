import react from 'react';
import AppLayout from './Components/AppLayout/AppLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fruits from './Pages/Fruits/Fruits';
import Dairy from './Pages/Dairy/Dairy';
import Seafood from './Pages/Seafood/Seafood';
import AllProducts from './Pages/AllProducts/AllProducts';
import Layout from './Components/Layout/Layout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <AppLayout />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/seafood',
          element: <Seafood />
        },
        {
          path: '/allproducts',
          element: <AllProducts />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;