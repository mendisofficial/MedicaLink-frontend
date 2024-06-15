import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Root from './Root'
import './App.css'
import AdminDashboard from './components/dashbaord/Dashboard.tsx'
import AdminSearchPanel from './components/search/AdminSearchPanel.tsx'
import NotFound from './NotFound.tsx'
import AdminPatientPanel from './components/patient/AdminPatientPanel.tsx'
import WorkingOnIt from './components/WorkingOnIt.tsx'
import Settings from './components/settings/Settings.tsx'
import Profile, { MedicalRecords, ProfileOverview, VaccinationDetails } from './components/patient/profile/Profile.tsx'
import ProfileReports, { MedicalRecordsTable, VaccinationTable } from './components/patient/profile/ProfileReports.tsx'
import { AdminOverview } from './components/admin/AdminOverview.tsx'
import { PatientRegistrationForm } from './components/patient/PatientRegistrationForm.tsx'
import { UseUser } from './components/auth/UserContext.tsx'
import UserLogIn from './components/login/UserLogIn.tsx'

function App() {
  const { user, setUser } = UseUser();

  // Route definition
  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Root /> : <Navigate to='/login' />,
      children: [
        {
          path: '/',
          element: user?.role == 'admin' ? <AdminDashboard /> : <Navigate to={`/patient/${user?.userId}/overview`} />
        },
        {
          path: '/search',
          element: <AdminSearchPanel />
        },
        {
          path: '/patient',
          element: <AdminPatientPanel />,
        },
        {
          path: '/patient/add',
          element: <PatientRegistrationForm />
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
          children: [
            {
              path: 'overview',
              element: <ProfileOverview />,
              children: [
                {
                  index: true,
                  element: <VaccinationDetails />
                },
                {
                  path: 'records',
                  element: <MedicalRecords />
                }
              ]
            },
            {
              path: '/patient/:patientId/reports',
              element: <ProfileReports />,
              children: [
                {
                  index: true,
                  element: <VaccinationTable />
                },
                {
                  path: 'medicals',
                  element: <MedicalRecordsTable />
                }
              ]
            }
          ]
        },
        {
          path: '/profile',
          element: <AdminOverview />
        }
      ],
      errorElement: <NotFound />
    },
    {
      path: '/login',
      element: <UserLogIn />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
