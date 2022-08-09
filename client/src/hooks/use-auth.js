import { useSelector } from "react-redux";

const useAuth = () => {
  const { auth } = useSelector((state) => state);
  return auth;
};
export default useAuth;
