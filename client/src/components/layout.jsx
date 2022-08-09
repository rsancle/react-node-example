import useAuth from "hooks/use-auth";
import React from "react";

export default function Layout({ children }) {
  const { isLoggedIn } = useAuth();
  const button = isLoggedIn ? (
    <a className="link" href="/log-out">
      Log out
    </a>
  ) : (
    <a className="link" href="/sign-up">
      Sign up
    </a>
  );
  return (
    <div>
      <header>
        <div className="brand"></div>
        <div className="user-info">{button}</div>
      </header>
      {children}
    </div>
  );
}
