import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import './index.css'
import Dashboard from './components/dashbaord/Dashboard.tsx'
import AdminSearchPanel from './components/search/AdminSearchPanel.tsx'
import NotFound from './NotFound.tsx'
import AdminPatientPanel from './components/patient/AdminPatientPanel.tsx'
import WorkingOnIt from './components/WorkingOnIt.tsx'
import Settings from './components/settings/Settings.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Dashboard/>
      },
      {
        path : '/search',
        element : <AdminSearchPanel/>
      },
      {
        path : '/patient',
        element : <AdminPatientPanel/>
      },
      {
        path : '/comments',
        element : <WorkingOnIt/>
      },
      {
        path : '/settings',
        element : <Settings/>
      }
    ],
    errorElement : <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
