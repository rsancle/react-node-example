import UserForm from "../../components/form/user-form";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/auth-slice";
const SignUp = () => {
  const dispatch = useDispatch();
  const user = {
    email: "",
    password: "",
  };
  const signIn = async (userData) => {
    const { email, password } = userData;
    await dispatch(register({ email, password })).unwrap();
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Sign Up</h1>
      <UserForm user={user} onSubmit={signIn} />
    </main>
  );
};

export default SignUp;
