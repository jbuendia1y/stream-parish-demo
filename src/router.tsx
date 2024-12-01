import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "",
    lazy: async () => {
      const Home = await import("./pages/Home").then((m) => m.default);
      return { Component: Home };
    },
  },
  {
    path: "login",
    lazy: async () => {
      const Login = await import("./pages/Login").then((m) => m.default);
      return { Component: Login };
    },
  },
  {
    path: "home",
    lazy: async () => {
      const AppHome = await import("./pages/AppHome").then((m) => m.AppHome);
      return {
        Component: () => (
          <ProtectedRoute>
            <AppHome />
          </ProtectedRoute>
        ),
      };
    },
  },
  {
    path: "movies",
    lazy: async () => {
      const AppMovies = await import("./pages/AppMovies").then(
        (m) => m.AppMovies
      );
      return {
        Component: () => (
          <ProtectedRoute>
            <AppMovies />
          </ProtectedRoute>
        ),
      };
    },
  },
]);
