import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppHome } from "./pages/AppHome";
import { AppMovies } from "./pages/AppMovies";

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
  {
    path: "movies",
    element: (
      <ProtectedRoute>
        <AppMovies />
      </ProtectedRoute>
    ),
  },
]);
