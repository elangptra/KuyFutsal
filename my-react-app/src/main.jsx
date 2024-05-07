import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Page/Login.jsx'
import RegisterPage from './Page/Register.jsx'
import HomePage from './Page/HomePage.jsx'
<<<<<<< HEAD
import Contact from './Page/Contact.jsx'
=======
import  AboutPage  from "./Page/About.jsx";
>>>>>>> a0bc9870a0ded0b89caa001ce261090632f1bfc0
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
<<<<<<< HEAD
    path: "/Contact",
    element: <Contact />,
=======
    path: "/About",
    element: <AboutPage />,
>>>>>>> a0bc9870a0ded0b89caa001ce261090632f1bfc0
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
