import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Component/Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Product from './Component/Product.jsx'
import About from './Component/About.jsx'
import Content from './Component/Content.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Product",
        element:<Product />
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/Content",
        element:<Content />
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
