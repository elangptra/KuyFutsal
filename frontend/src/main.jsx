import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Page/Login.jsx";
import RegisterPage from "./Page/Register.jsx";
import HomePage from "./Page/HomePage.jsx";
import Contact from "./Page/Contact.jsx";
import AboutPage from "./Page/About.jsx";
import "./index.css";
import SewaLapangan from "./Page/SewaLapangan.jsx";
import Pembayaran from "./Page/Pembayaran.jsx";
import DetailPembayaran from "./Page/DetailPembayaran.jsx";
import PageDetailLapangan from "./Page/DetailLapangan.jsx";
import VirtualAccount from "./Page/VirtualAccount.jsx";

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
  },
  {
    path: "/Pembayaran",
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
    path: "/VirtualAccount",
    element: <VirtualAccount />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
