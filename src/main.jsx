import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CertificateView, {
  loader as diplomaLoader,
} from './pages/CertificateView.jsx'
import './index.css'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/diploma/:dui",
    element: <CertificateView/>,
    loader: diplomaLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
