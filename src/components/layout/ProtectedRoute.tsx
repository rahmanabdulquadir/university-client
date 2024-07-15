import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const {token} = useAppSelector((state) => state?.auth)
  // const {token} = useAppSelector(useCurrentToken)
  if(!token){
    return <Navigate to={'/login'} replace={true}/>
  }
  return children
};

export default ProtectedRoute;