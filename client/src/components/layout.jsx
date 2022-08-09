import useAuth from "hooks/use-auth";
import React from "react";
import AuthService from "../services/auth-service";
export default function Layout({ children }) {
  const { isLoggedIn, user } = useAuth();

  const logout = async () => {
    await AuthService.signout();
    window.location.href = "/";
  };
  const button = isLoggedIn ? (
    <>
      <span>Hello {user.email}!</span>
      <button onClick={logout}>Log out</button>
    </>
  ) : (
    <a className="link" href="/sign-up">
      Sign up
    </a>
  );
  return (
    <div>
      <header>
        <div className="brand">
          <a href="/">Rick and Morty Characters</a>
        </div>
        <div className="user-info">{button}</div>
      </header>
      {children}
    </div>
  );
}
