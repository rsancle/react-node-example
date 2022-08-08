import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./pages/characters/character";
import SignIn from "./pages/auth/sign-in";
import NotFound from "./pages/errors/NotFound";
import CharactersList from "./pages/characters/characters-list";
import React, { useEffect } from "react";
import RequireAuth from "./middlewares/require-auth";
import { useDispatch } from "react-redux";
import { currentUser } from "store/slices/auth-slice";
import useAuth from "hooks/use-auth";

const App = () => {
  const dispatch = useDispatch();
  let auth = useAuth();
  useEffect(() => {
    if (!auth.isLoggedIn) dispatch(currentUser());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="characters"
          element={
            <RequireAuth>
              <CharactersList />
            </RequireAuth>
          }
        >
          <Route
            path=":characterId"
            element={
              <RequireAuth>
                <Character />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
