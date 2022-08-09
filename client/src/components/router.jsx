import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "../pages/characters/character";
import SignIn from "../pages/auth/sign-in";
import NotFound from "../pages/errors/NotFound";
import Characters from "../pages/characters/characters";
import RequireAuth from "../middlewares/require-auth";
import SignUp from "pages/auth/sign-up";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/characters"
          element={
            <RequireAuth>
              <Characters />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/characters/:characterId"
          element={
            <RequireAuth>
              <Character />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Characters />
            </RequireAuth>
          }
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
