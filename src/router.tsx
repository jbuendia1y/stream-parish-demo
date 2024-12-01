import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppHome } from "./pages/AppHome";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: (
      <ProtectedRoute>
        <AppHome />
      </ProtectedRoute>
    ),
  },
]);
