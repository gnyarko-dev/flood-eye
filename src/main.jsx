import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Projects from './projects'

const router=createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/projects',
    element:<Projects/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
