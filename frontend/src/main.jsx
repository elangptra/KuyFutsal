import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';
import LoginPage from "./Page/Login.jsx";
import RegisterPage from "./Page/Register.jsx";
import HomePage from "./Page/HomePage.jsx";
import Contact from "./Page/Contact.jsx";
import AboutPage from "./Page/About.jsx";
import SewaLapangan from "./Page/SewaLapangan.jsx";
import Pembayaran from "./Page/Pembayaran.jsx";
import DetailPembayaran from "./Page/DetailPembayaran.jsx";
import PageDetailLapangan from "./Page/DetailLapangan.jsx";
import VirtualAccount from "./Page/VirtualAccount.jsx";
import AuthSuccess from "./Page/auth.succes.jsx";
import EditProfile from "./Page/EditProfile.jsx";
import DashboardPengelola from "./Page/DashboardPengelola.jsx";

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
    path: "/",
    element: <HomePage />,
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
  },
  {
    path: "/Pembayaran/:id_booking",
    element: <Pembayaran />,
  },
  {
    path: "/DetailPembayaran",
    element: <DetailPembayaran />,
  },
  {
    path: "/detailLapangan/:nama/:id", // Menangani parameter nama dan id
    element: <PageDetailLapangan />,
  },
  {
    path: "/VirtualAccount/:id_pembayaran",
    element: <VirtualAccount />,
  },
  {
    path: "/auth/success", // Rute untuk AuthSuccess
    element: <AuthSuccess/>,
  },
  {
    path: "/EditProfile",
    element: <EditProfile />,
  },
  {
    path: "/DashboardPengelola",
    element: <DashboardPengelola />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
