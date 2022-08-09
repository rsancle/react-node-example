import UserForm from "../../components/form/user-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/auth-slice";
import { Navigate } from "react-router-dom";
const SignIn = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = {
    email: "",
    password: "",
  };
  if (isLoggedIn) {
    return <Navigate to="/characters" replace />;
  }
  const signIn = async (userData) => {
    const { email, password } = userData;
    await dispatch(login({ email, password }));
    window.location.reload();
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Sign in</h1>
      <div className="container">
        <UserForm user={user} onSubmit={signIn} />
      </div>
    </main>
  );
};

export default SignIn;
