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
import Profile, { MedicalRecords, ProfileOverview, VaccinationDetails } from './components/patient/Profile.tsx'
import ProfileReports from './components/patient/ProfileReports.tsx'
import { AdminOverview } from './components/admin/AdminOverview.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/search',
        element: <AdminSearchPanel />
      },
      {
        path: '/patient',
        element: <AdminPatientPanel />
      },
      {
        path: '/comments',
        element: <WorkingOnIt />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/patient/:patientId',
        element: <Profile />,
        children : [
          {
            element: <ProfileOverview />,
            children: [
              {
                path: '/patient/:patientId/overview',
                element: <VaccinationDetails />
              },
              {
                path: '/patient/:patientId/records',
                element: <MedicalRecords />
              }
            ]
          },
          {
            path: '/patient/:patientId/reports',
            element: <ProfileReports />
          }
        ]
      },
      {
        path:'/profile',
        element: <AdminOverview/>
      }
    ],
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
