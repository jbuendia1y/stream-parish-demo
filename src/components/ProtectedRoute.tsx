import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PropsWithChildren } from "react";

export const ProtectedRoute = (props: PropsWithChildren) => {
  const { user } = useAuth();
  if (user === null) return <Navigate to="/login" />;
  return props.children;
};
