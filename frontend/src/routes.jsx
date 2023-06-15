import React from "react";
import Home from "./pages/Home/index.jsx";
import Login from "./pages/Auth/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default router;
