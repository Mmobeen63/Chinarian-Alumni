import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckLogin = () => {
const currentUser= useSelector((state:any)=>state.authInfo.userInfo);
const {accessToken}= currentUser
  const loginStatus = accessToken;
  return loginStatus=== undefined ? (
    <Outlet />
  ) :  (
    <Navigate to="/" />
  );
};
export default CheckLogin;