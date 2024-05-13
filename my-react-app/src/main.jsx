import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Page/Login.jsx'
import RegisterPage from './Page/Register.jsx'
import HomePage from './Page/HomePage.jsx'
import Contact from './Page/Contact.jsx'
import  AboutPage  from "./Page/About.jsx";
import  SewaLapangan  from "./Page/SewaLapangan.jsx";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/homePage",
    element: <HomePage />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "/SewaLapangan",
    element: <SewaLapangan />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)