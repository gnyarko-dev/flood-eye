import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Projects from './projects'
import Contacts from './contacts'
import NotFound from './components/NotFound'

const router=createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/projects',
    element:<Projects/>
  },
  {
    path: '/contacts',
    element:<Contacts />
  },
  {
    path: '*',
    element:<NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
