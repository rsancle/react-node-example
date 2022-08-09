import UserForm from "../../components/form/user-form";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/slices/auth-slice";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = {
    email: "",
    password: "",
  };
  const signUn = async (userData) => {
    const { email, password } = userData;
    await dispatch(register({ email, password })).unwrap();
    navigate("/");
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Sign Up</h1>
      <UserForm user={user} onSubmit={signUn} />
    </main>
  );
};

export default SignUp;
