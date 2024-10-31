import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { urls } from "../../navigation/app.urls";

const AuthProvider = (props: PropsWithChildren) => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  return !isAuthenticated ? (
    <>{props.children}</>
  ) : (
    <Navigate to={urls.auth} replace />
  );
}

export default AuthProvider