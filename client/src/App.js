import "./App.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "store/slices/auth-slice";
import useAuth from "hooks/use-auth";
import Layout from "components/layout";
import Router from "components/router";

const App = () => {
  const dispatch = useDispatch();
  let auth = useAuth();
  useEffect(() => {
    if (!auth.isLoggedIn) dispatch(currentUser());
  });

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
