import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../components";
import Home from "../pages/Home";
import ErrorBoundary from "../utils/hoc/ErrorBoundary";
import Notfound from "../utils/hoc/Notfound";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
