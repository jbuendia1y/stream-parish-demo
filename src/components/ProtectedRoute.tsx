import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PropsWithChildren } from "react";
import { UserNotExist } from "../models/User";

export const ProtectedRoute = (props: PropsWithChildren) => {
  const { user } = useAuth();
  if (user === UserNotExist) return <Navigate to="/login" />;
  return props.children;
};
