import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import CompanyDetails from './Components/JobDetails/CompanyDetails.jsx';
import LogIn from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import MyProfile from './Components/MyProfile/MyProfile.jsx';
import About from './Components/About/about.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';






const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,

    children: [
      { index: true, Component: Home },
      {
        path: 'home',
        Component: Home
      },

      {
        path: 'home/:userId',
        element: <PrivateRoute><CompanyDetails></CompanyDetails></PrivateRoute>
        // Component: CompanyDetails
      },
      {
        path: 'login',
        Component: LogIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'myprofile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        // Component: MyProfile
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'forgetpassword',
        Component: ForgetPassword
      },
      {
        path: '*',
        element: <img className='max-w-lg mx-auto' src="/assets/Error.jpg" alt="" srcset="" />
      },
      {
        path: 'updateprofile',
        Component: UpdateProfile
        }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
